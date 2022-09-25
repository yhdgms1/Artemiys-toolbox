import type { OnSubmit } from '~/lib/forms'
import { ApiResponse } from '~/lib/cs/types'
import { createSignal, Show } from 'solid-js'
import { t } from '~/i18n'
import { Button, Input, Container, Link, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'

import { cdashs } from '~/lib/constants'
import { createNamedItemReceiver, inlineStyles } from '~/lib/forms'
import { request } from '~/lib/cs/api'

export default () => {
  const [data, setData] = createSignal<ApiResponse>({})

  const onSubmit: OnSubmit = async e => {
    e.preventDefault()

    const elements = e.currentTarget.elements
    const namedItem = createNamedItemReceiver(elements)

    const id = namedItem('id').value.trim()

    if (id === '') return

    try {
      const json = await request('delete', id)

      setData(json)
    } catch {
      setData({ error: t('cs.5') })
    }
  }

  return (
    <>
      <Title>Remove from site</Title>
      <Link href={'/' + cdashs}>{t('global.11')}</Link>
      <form style={inlineStyles()} onSubmit={onSubmit}>
        <Container independent={true}>
          <Input type="text" name="id" placeholder={t('cs.9.0')}>
            {t('cs.9.0')}
          </Input>
        </Container>
        <Button type="submit">{t('cs.1')}</Button>
      </form>
      <Paragraph>
        <Show when={data().userid}>{t('cs.9.1') + '!'}</Show>
        <Show when={data().error}>{t('cs.3') + ': ' + data().error}</Show>
      </Paragraph>
    </>
  )
}
