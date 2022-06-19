import { ApiResponse } from '~/lib/cs/types'
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

import { cdashs, cs } from '~/lib/constants'
import { apiUrl } from '~/lib/cs/utils'

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
      setData({ error: t([cs, 'Unexpected Error']) })
    }
  }

  return (
    <>
      <Title>Create Using VK</Title>
      <Link href={'/' + cdashs}>{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t([cs, 'vk', 'id or shortname'])}
          onInput={e => setShortname(e.currentTarget.value.trim())}
        >
          {t([cs, 'vk', 'id or shortname'])}
        </Input>
        <Checkbox onChange={e => setIsPrivate(e.currentTarget.checked)}>
          Private
        </Checkbox>
      </Container>
      <Button onClick={getData}>{t([cs, 'Submit'])}</Button>
      <Show when={data().error}>
        <Paragraph>
          {t([cs, 'Error'])}: {data().error}
        </Paragraph>
      </Show>
      <Show when={data().userid}>
        <Show when={!data().error}>
          <Paragraph>{t([cs, 'Created Successfully'])}!</Paragraph>
        </Show>
        <Link
          small={true}
          target="_blank"
          rel="noopener noreferer"
          href={`https://${cdashs}.pages.dev/slut/` + data().userid}
        >
          {t([cs, 'Look at this'])}
        </Link>
      </Show>
    </>
  )
}
