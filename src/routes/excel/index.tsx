import type { JSX } from 'solid-js';

import { Button, CopyButton, Textarea, Input, Paragraph, Container, Heading } from '~/components'
import { Title } from '@solidjs/meta'
import { channel } from '~/lib'
import { createEffect } from 'solid-js'

const childContainer: JSX.CSSProperties = {
  width: '100%'
}

type Table = Record<string, number | null>;

const createTable = (keys: number, values: (number | null)[]) => {
  const table = {} as Record<string, number | null>;

  for (let i = 0; i < values.length; i++) {
    table[i + 1] = values[i];
  }

  return table;
}


const create = function (data: Table, key: string, DATA_KEY: string): string {
  const next = Number(key) + 1;

  if (next > Object.keys(data).length) {
    return Object.keys(data).length.toString()
  }

  if (data[key] == null) {
    return create(data, next.toString(), DATA_KEY);
  }

  return `ЕСЛИ(${DATA_KEY} <= ${data[key]}; ${key}; ${create(data, next.toString(), DATA_KEY)})`;
}

const createHuge = function (data: Table, DATA_KEY: string) {
  let str = ''

  const $ = Object.entries(data).reverse();

  const e = (num: number | null) => {
    return String(num || 0).replace('.', ',');
  }

  for (let i = 0; i < $.length; i++) {
    const [score, num] = $[i];
    const [, prevNum] = $[i - 1] || [, 0];

    str += `ЕСЛИ(И(${DATA_KEY} <= ${e(num)}; ${DATA_KEY} > ${e(prevNum)}); ${score};) & `
  }

  return str
}

export default () => {
  const score = channel(0);
  const key = channel('H4');
  const results = channel([] as (number | null)[]);

  const formula = channel('');

  createEffect(() => {
    console.log(createTable(0, results()))
  });

  const createFormula = () => {
    if (score() !== results().length) {
      return 'Очки не равны результатам'
    }

    const table = createTable(score(), results());

    if (score() > 64) {
      return createHuge(table, key())
    } else {
      return create(table, '1', key())
    }
  }

  return (
    <>
      <Title>Excel</Title>
      <Heading as="h2">Excel</Heading>
      <Container style={{ display: 'flex' }} independent>
        <Container style={childContainer}>
          <Input
          placeholder='Максимальное кол-во очков' 
          type="number" 
          value={score()} 
          onInput={e => {
            score(e.currentTarget.valueAsNumber)
          }}>Очки</Input>
          <Input
          placeholder='Столбец'
          value={key()} 
          onInput={e => {
            key(e.currentTarget.value)
          }}>Столбец</Input>
        </Container>
        <Container style={childContainer}>
          <Paragraph>
            Результаты
          </Paragraph>
          <Textarea placeholder='Результаты, введенные на разных строках' value={results().join('\n')} onInput={e => {
            results(e.currentTarget.value.split('\n').map(line => {
              const parsed = parseFloat(line.replace(',', '.'));

              return Number.isNaN(parsed) ? null : parsed;
            }))
          }} />
        </Container>
      </Container>
      <Container>
          <Button onClick={() => {
            formula(createFormula());
          }}>Создать формулу</Button>
          <Textarea readOnly value={formula()} />
          <CopyButton copy='' />
      </Container>
    </>
  )
}