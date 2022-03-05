import { ApiResponse } from '~/lib/cheap-sluts/types'
import { createSignal, Show } from 'solid-js'
import { t } from '~/i18n'
import {
  Button,
  Input,
  Checkbox,
  Container,
  Link,
  Paragraph,
} from '~/components'
import { Title } from 'solid-meta'

import { apiUrl } from '~/lib/cheap-sluts/utils'

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [isPrivate, setIsPrivate] = createSignal(false)
  const [data, setData] = createSignal<ApiResponse>({})

  const getData = async () => {
    if (shortname() === '') return

    try {
      const response = await fetch(apiUrl + 'create/vk', {
        method: 'POST',
        body: JSON.stringify({
          id: shortname(),
          private: isPrivate(),
        }),
      })

      const json: ApiResponse = await response.json()

      setData(json)
    } catch {
      setData({ error: t(['cheap sluts', 'Unexpected Error']) })
    }
  }

  return (
    <>
      <Title>Create Using VK</Title>
      <Link href="/cheap-sluts">{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'vk', 'id or shortname'])}
          onInput={e => setShortname(e.currentTarget.value.trim())}
        >
          {t(['cheap sluts', 'vk', 'id or shortname'])}
        </Input>
        <Checkbox
          onChange={e => setIsPrivate(e.currentTarget.checked)}
          id="private-check"
        >
          Private
        </Checkbox>
      </Container>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      <Show when={data().error}>
        <Paragraph>
          {t(['cheap sluts', 'Error'])}: {data().error}
        </Paragraph>
      </Show>
      <Show when={data().userid}>
        <Show when={!data().error}>
          <Paragraph>{t(['cheap sluts', 'Created Successfully'])}!</Paragraph>
        </Show>
        <Link
          small={true}
          target="_blank"
          rel="noopener noreferer"
          href={'https://cheap-sluts.pages.dev/slut/' + data().userid}
        >
          {t(['cheap sluts', 'Look at this'])}
        </Link>
      </Show>
    </>
  )
}
