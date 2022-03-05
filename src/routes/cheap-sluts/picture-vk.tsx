import { createSignal, Show, For } from 'solid-js'
import { t } from '~/i18n'
import {
  Button,
  Input,
  Disclosure,
  Container,
  Link,
  Paragraph,
} from '~/components'
import { Title } from 'solid-meta'
import { createHrefUrl, apiUrl } from '~/lib/cheap-sluts/utils'

type ApiData = {
  error?: string
  name?: string
  picture?: string
}

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [data, setData] = createSignal<ApiData>({})

  const [width, setWidth] = createSignal(0)
  const [height, setHeight] = createSignal(0)

  const renderers = [
    'slut',
    'crime',
    'gay',
    'muslim',
    'azerbaijan',
    'mom',
    'svinoros',
  ]

  const clickHandler = async () => {
    if (!shortname()) return

    try {
      const response = await fetch(apiUrl + 'vk/info', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ id: shortname() }),
      })

      const json: ApiData = await response.json()

      setData(json)
    } catch (error) {
      setData({
        error: t(['cheap sluts', 'Unexpected Error']),
      })
    }
  }

  return (
    <>
      <Link href="/cheap-sluts">{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'vk', 'id or shortname'])}
          spellcheck={false}
          onInput={e => setShortname(e.currentTarget.value.trim())}
        >
          {t(['cheap sluts', 'vk', 'id or shortname'])}
        </Input>
        <Disclosure
          buttonChildren={t(['cheap sluts', 'picture', 'Additional options'])}
        >
          <Input
            type="number"
            placeholder={t(['cheap sluts', 'picture', 'Picture width'])}
            spellcheck={false}
            onInput={e => setWidth(e.currentTarget.valueAsNumber)}
          >
            {t(['cheap sluts', 'picture', 'Picture width'])}
          </Input>
          <Input
            type="number"
            placeholder={t(['cheap sluts', 'picture', 'Picture height'])}
            spellcheck={false}
            onInput={e => setHeight(e.currentTarget.valueAsNumber)}
          >
            {t(['cheap sluts', 'picture', 'Picture height'])}
          </Input>
        </Disclosure>
      </Container>
      <Button onClick={clickHandler}>
        {t(['cheap sluts', 'picture-vk', 'Find'])}
      </Button>
      <Show when={'error' in data()}>
        <Paragraph>
          {t(['cheap sluts', 'Error'])}: {data().error}
        </Paragraph>
      </Show>
      <Show when={'name' in data() && 'picture' in data()}>
        <For each={renderers}>
          {template => {
            const { name, picture } = data() as Required<NonNullable<ApiData>>

            return (
              <Link
                small={true}
                margin={true}
                target="_blank"
                href={createHrefUrl(template, name, picture, width(), height())}
              >
                {t(['cheap sluts', 'picture', 'Create'], { template })}
              </Link>
            )
          }}
        </For>
      </Show>
    </>
  )
}
