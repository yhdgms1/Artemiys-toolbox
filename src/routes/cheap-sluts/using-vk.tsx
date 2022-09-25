import { OnSubmit } from '~/lib/forms'

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
import { Title } from '@solidjs/meta'

import { cdashs } from '~/lib/constants'
import { inlineStyles, createNamedItemReceiver } from '~/lib/forms'
import { request } from '~/lib/cs/api'

export default () => {
  // prettier-ignore
  const [data, setData] = createSignal<{ error?: string; id?: string}>({})

  const onSubmit: OnSubmit = async e => {
    e.preventDefault()

    const elements = e.currentTarget.elements
    const namedItem = createNamedItemReceiver(elements)

    const id = namedItem('id').value.trim()
    const isPrivate = namedItem('private').checked

    if (id === '') return

    try {
      const json = await request('add_vk', {
        private: isPrivate,
        id: id,
      })

      setData(json)
    } catch (E) {
      console.log(E)
      setData({ error: t('cs.5') })
    }
  }

  return (
    <>
      <Title>Create Using VK</Title>
      <Link href={'/' + cdashs}>{t('global.11')}</Link>
      <form style={inlineStyles()} onSubmit={onSubmit}>
        <Container independent={true}>
          <Input type="text" name="id" placeholder={t('cs.7.0')}>
            {t('cs.7.0')}
          </Input>
          <Checkbox name="private">Private</Checkbox>
        </Container>
        <Button type="submit">{t('cs.1')}</Button>
      </form>
      <Show when={data().error}>
        <Paragraph>
          {t('cs.3')}: {data().error}
        </Paragraph>
      </Show>
      <Show when={data().id}>
        <Show when={!data().error}>
          <Paragraph>{t('cs.4')}!</Paragraph>
        </Show>
        <Link
          small={true}
          target="_blank"
          rel="noopener noreferer"
          href={`https://${cdashs}.pages.dev/slut/` + data().id}
        >
          {t('cs.2')}
        </Link>
      </Show>
    </>
  )
}
