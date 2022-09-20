import { useParams } from '@solidjs/router'
import { createSignal, Show } from 'solid-js'

import { t } from '~/i18n'
import {
  CopyButton,
  Textarea,
  Button,
  Container,
  Heading,
  Link,
  Paragraph,
  Await,
} from '~/components'
import { Title } from '@solidjs/meta'

const Fallback = () => {
  const title = t('transliteration.7')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Link href="/transliteration">{t('transliteration.8')}</Link>
    </>
  )
}

const ID = () => {
  const schema = useParams().id

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <Await for={import('iuliia')}>
      {({ Schemas, translate }) => (
        <Show when={Schemas.names().includes(schema)} fallback={Fallback}>
          <Title>{t('transliteration.2') + ' | ' + schema}</Title>
          <Link href="/transliteration">{t('global.11')}</Link>
          <Paragraph>{t('transliteration.3', { schema })}</Paragraph>
          <Textarea
            spellcheck={false}
            placeholder={t('transliteration.4')}
            onInput={e => setText(e.currentTarget.value)}
          />
          <Container responsive={true}>
            <Button
              onClick={() => {
                const translated = translate(text(), Schemas.get(schema))

                setOutput(translated)
              }}
            >
              {t('transliteration.6')}!
            </Button>
            <CopyButton copy={output()} />
          </Container>
          <Textarea
            spellcheck={false}
            readOnly={true}
            placeholder={t('transliteration.5')}
            value={output()}
          />
        </Show>
      )}
    </Await>
  )
}

export default ID
