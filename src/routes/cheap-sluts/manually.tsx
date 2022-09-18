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
import { Title } from '@solidjs/meta'

import { cdashs } from '~/lib/constants'
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
      setData({ error: t('cs.5') })
    }
  }

  return (
    <>
      <Title>Create Manually</Title>
      <Link href={'/' + cdashs}>{t('global.11')}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t('cs.8.0')}
          spellcheck={false}
          onInput={e => setName(e.currentTarget.value)}
        >
          {t('cs.8.0')}
        </Input>
        <Input
          type="text"
          placeholder={t('cs.8.1')}
          spellcheck={false}
          onInput={e => setPic(e.currentTarget.value)}
        >
          {t('cs.8.1')}
        </Input>
        <Checkbox onChange={e => setIsPrivate(e.currentTarget.checked)}>
          Private
        </Checkbox>
      </Container>
      <Button onClick={getData}>{t('cs.1')}</Button>
      <Show when={data().userid}>
        <>
          <Paragraph>{t('cs.4')}!</Paragraph>
          <Link
            small={true}
            target="_blank"
            rel="noopener noreferer"
            href={`https://${cdashs}.pages.dev/slut/` + data().userid}
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
