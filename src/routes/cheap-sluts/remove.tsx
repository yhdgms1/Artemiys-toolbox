import { ApiResponse } from '~/lib/cs/types'
import { createSignal, Show } from 'solid-js'
import { t } from '~/i18n'
import { Button, Input, Container, Link, Paragraph } from '~/components'
import { Title } from 'solid-meta'

import { cs, cdashs } from '~/lib/constants'
import { apiUrl } from '~/lib/cs/utils'

export default () => {
  const [id, setId] = createSignal('')
  const [data, setData] = createSignal<ApiResponse>({})

  const getData = async () => {
    if (id() === '') return

    try {
      const response = await fetch(apiUrl + 'delete', {
        method: 'POST',
        body: JSON.stringify({
          userid: id(),
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
      <Title>Remove from site</Title>
      <Link href={'/' + cdashs}>{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t([cs, 'remove', 'id'])}
          onInput={e => setId(e.currentTarget.value.trim())}
        >
          {t([cs, 'remove', 'id'])}
        </Input>
      </Container>
      <Button onClick={getData}>{t([cs, 'Submit'])}</Button>
      <Paragraph>
        <Show when={data().userid}>
          {t([cs, 'remove', 'Removed Successfully']) + '!'}
        </Show>
        <Show when={data().error}>
          {t([cs, 'Error']) + ': ' + data().error}
        </Show>
      </Paragraph>
    </>
  )
}
