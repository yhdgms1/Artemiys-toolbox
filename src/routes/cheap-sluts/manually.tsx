import type { OnSubmit } from '~/lib/forms'

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
import { createNamedItemReceiver, inlineStyles } from '~/lib/forms'
import { request } from '~/lib/cs/api'

export default () => {
  const [data, setData] = createSignal<{ error?: string; id?: string }>({
    error: '',
    id: '',
  })

  const onSubmit: OnSubmit = async e => {
    e.preventDefault()

    const elements = e.currentTarget.elements
    const namedItem = createNamedItemReceiver(elements)

    const name = namedItem('name').value
    const picture = namedItem('picture').value
    const isPrivate = namedItem('private').checked

    if (name === '' || picture === '') {
      return
    }

    try {
      const json = await request('add', {
        name: name,
        picture: picture,
        private: isPrivate,
      })

      setData(json)
    } catch {
      setData({ error: t('cs.5') })
    }
  }

  return (
    <>
      <Title>Create Manually</Title>
      <Link href={'/' + cdashs}>{t('global.11')}</Link>
      <form style={inlineStyles()} onSubmit={onSubmit}>
        <Container independent={true}>
          <Input
            type="text"
            name="name"
            placeholder={t('cs.8.0')}
            spellcheck={false}
          >
            {t('cs.8.0')}
          </Input>
          <Input
            type="text"
            name="picture"
            placeholder={t('cs.8.1')}
            spellcheck={false}
          >
            {t('cs.8.1')}
          </Input>
          <Checkbox name="private">Private</Checkbox>
        </Container>
        <Button type="submit">{t('cs.1')}</Button>
      </form>
      <Show when={data().id}>
        <>
          <Paragraph>{t('cs.4')}!</Paragraph>
          <Link
            small={true}
            target="_blank"
            rel="noopener noreferer"
            href={`https://${cdashs}.pages.dev/slut/` + data().id}
          >
            {t('cs.2')}
          </Link>
        </>
      </Show>
      <Show when={data().error}>
        <Paragraph>
          {t('cs.3')}: {data().error}
        </Paragraph>
      </Show>
    </>
  )
}
