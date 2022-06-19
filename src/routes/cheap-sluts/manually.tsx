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

import { cs, cdashs } from '~/lib/constants'
import { apiUrl } from '~/lib/cs/utils'

export default () => {
  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')
  const [isPrivate, setIsPrivate] = createSignal(false)

  const [data, setData] = createSignal<ApiResponse>({ error: '', userid: '' })

  const getData = async () => {
    if (name() === '' || pic() === '') return

    try {
      const response = await fetch(apiUrl + 'create', {
        method: 'POST',
        body: JSON.stringify({
          name: name(),
          picture: pic(),
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
      <Title>Create Manually</Title>
      <Link href={'/' + cdashs}>{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t([cs, 'manually', 'Name'])}
          spellcheck={false}
          onInput={e => setName(e.currentTarget.value)}
        >
          {t([cs, 'manually', 'Name'])}
        </Input>
        <Input
          type="text"
          placeholder={t([cs, 'manually', 'Picture'])}
          spellcheck={false}
          onInput={e => setPic(e.currentTarget.value)}
        >
          {t([cs, 'manually', 'Picture'])}
        </Input>
        <Checkbox onChange={e => setIsPrivate(e.currentTarget.checked)}>
          Private
        </Checkbox>
      </Container>
      <Button onClick={getData}>{t([cs, 'Submit'])}</Button>
      <Show when={data().userid}>
        <>
          <Paragraph>{t([cs, 'Created Successfully'])}!</Paragraph>
          <Link
            small={true}
            target="_blank"
            rel="noopener noreferer"
            href={`https://${cdashs}.pages.dev/slut/` + data().userid}
          >
            {t([cs, 'Look at this'])}
          </Link>
        </>
      </Show>
      <Show when={data().error}>
        <Paragraph>
          {t([cs, 'Error'])}: {data().error}
        </Paragraph>
      </Show>
    </>
  )
}
