import {
  Button,
  CopyButton,
  Textarea,
  Input,
  Checkbox,
  Paragraph,
  Container,
  Heading,
  Disclosure,
} from '~/components'
import { onCleanup } from 'solid-js'
import { Title } from '@solidjs/meta'
import { channel } from '~/lib'

const NEW_LINE = '\n'

type Table = Record<string, number | null>

const createTable = (values: (number | null)[]) => {
  const table = {} as Record<string, number | null>

  for (let i = 0; i < values.length; i++) {
    table[i + 1] = values[i]
  }

  return table
}

/**
 * Заменить ли `>` на `<`, `<=` на `>=`
 *
 * Переменная на уровне модуля, т.к. функции `create` и `createHuge` используются только в связке с одним экземпляром компонента
 */
let flipСomparisonOperators = false
/**
 * Использовать ли `createHuge`, несмотря на `score()`
 */
let alwaysUseHugeMethod = false

/**
 * Создаёт одно выражение ЕСЛИ, в которое вложены последующие
 * @param data Таблица
 */
const create = function (data: Table, key: string, DATA_KEY: string): string {
  const next = Number(key) + 1
  const length = Object.keys(data).length

  if (next > length) {
    return length.toString()
  }

  if (data[key] == null) {
    return create(data, next.toString(), DATA_KEY)
  }

  // prettier-ignore
  return `ЕСЛИ(${DATA_KEY} ${flipСomparisonOperators ? '>=' : '<='} ${data[key]}; ${key}; ${create(data, next.toString(), DATA_KEY)})`
}

/**
 * Создаёт множество выражений ЕСЛИ, объединённых через `&`
 * @param data Таблица
 */
const createHuge = function (data: Table, DATA_KEY: string) {
  let result = ''

  const entries = Object.entries(data).reverse()

  const escape = (num: number | null) => {
    return String(num || 0).replace('.', ',')
  }

  for (let i = 0; i < entries.length; i++) {
    const [score, value] = entries[i]

    /**
     * Находит предыдущее макс. число
     */
    let j = i + 1
    let prev = entries[j]?.[1]

    while ((prev = entries[j]?.[1])! <= 0) {
      if (j > entries.length) {
        break
      }

      j++
    }

    /**
     * Если числа "плохие" - не будем добавлять их в выражение
     */
    if ((!prev && !value) || !value) {
      continue
    }

    // prettier-ignore
    result += `ЕСЛИ(И(${DATA_KEY} ${flipСomparisonOperators ? '>=' : '<='} ${escape(value)}; ${DATA_KEY} ${flipСomparisonOperators ? '<' : '>'} ${escape(prev)}); ${score};) & `
  }

  // Удалим лишние ` & `
  return result.slice(0, -3)
}

export default () => {
  const score = channel(100)
  const key = channel('H4')
  const results = channel([] as (number | null)[])

  const formula = channel('')

  const createFormula = () => {
    if (score() !== results().length) {
      return 'Количество очков не сопоставимо количеству результатов'
    }

    const table = createTable(results())

    /**
     * В Excel есть ограничение на вложенность - 64 (начиная с 2007, до этого было 7)
     */
    if (alwaysUseHugeMethod || score() > 64) {
      return createHuge(table, key())
    } else {
      return create(table, '1', key())
    }
  }

  onCleanup(() => {
    flipСomparisonOperators = false
    alwaysUseHugeMethod = false
  })

  return (
    <>
      <Title>Excel</Title>
      <Heading as="h2">Excel</Heading>
      <Container
        independent
        style={{
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
        }}
      >
        <Disclosure buttonChildren={<>Что делает этот инструмент</>}>
          <Paragraph style={{ 'text-align': 'start', padding: '0.4rem' }}>
            Допустим, существует таблица оценки результатов. За различные
            результаты можно получить очки. Этот инструмент составляет формулу
            для подсчёта этого результата, основываясь на количестве очков, и
            соотнесённым им результатам
          </Paragraph>
        </Disclosure>
        <Input
          placeholder="Максимальное кол-во очков"
          type="number"
          value={score()}
          onInput={e => {
            const value = e.currentTarget.valueAsNumber

            if (!Number.isNaN(value) && Number.isFinite(value)) {
              score(value)
            }
          }}
        >
          Максимальное количество очков
        </Input>
        <Input
          placeholder="Например, B4"
          value={key()}
          onInput={e => {
            key(e.currentTarget.value)
          }}
        >
          Столбец с результатами
        </Input>
        <Checkbox
          onClick={e => {
            flipСomparisonOperators = e.currentTarget.checked
          }}
        >
          Перевернуть операторы сравнивания
        </Checkbox>
        <Checkbox
          onClick={e => {
            alwaysUseHugeMethod = e.currentTarget.checked
          }}
        >
          Всегда использовать метод с `&`
        </Checkbox>
        <Paragraph>Результаты</Paragraph>
        <Textarea
          placeholder="Результаты, соответствующие оценкам. Каждый результат должен быть на новой строке. Пустая строка - отсутствие результата"
          value={results().join(NEW_LINE)}
          onInput={e => {
            results(
              e.currentTarget.value.split(NEW_LINE).map(line => {
                const parsed = parseFloat(line.replace(',', '.'))

                return Number.isNaN(parsed) ? null : parsed
              })
            )
          }}
        />
        <Button
          onClick={() => {
            formula('=' + createFormula())
          }}
        >
          Создать формулу
        </Button>
        <Textarea
          placeholder="Здесь будет формула для Excel, или сообщение об ошибке"
          readOnly
          value={formula()}
        />
        <CopyButton copy={formula()} />
      </Container>
    </>
  )
}
