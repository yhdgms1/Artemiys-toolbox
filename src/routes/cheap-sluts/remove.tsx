import { ApiResponse } from '~/lib/cs/types'
import { createSignal, Show } from 'solid-js'
import { t } from '~/i18n'
import { Button, Input, Container, Link, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'

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
      setData({ error: t('cs.5') })
    }
  }

  return (
    <>
      <Title>Remove from site</Title>
      <Link href={'/' + cdashs}>{t('global.11')}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t('cs.9.0')}
          onInput={e => setId(e.currentTarget.value.trim())}
        >
          {t('cs.9.0')}
        </Input>
      </Container>
      <Button onClick={getData}>{t('cs.1')}</Button>
      <Paragraph>
        <Show when={data().userid}>{t('cs.9.1') + '!'}</Show>
        <Show when={data().error}>{t('cs.3') + ': ' + data().error}</Show>
      </Paragraph>
    </>
  )
}
