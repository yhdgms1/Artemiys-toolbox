import { useParams } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'

import { translate, Schemas } from 'iuliia'
import { t } from '~/i18n'
import {
  CopyButton,
  Textarea,
  Button,
  Container,
  Heading,
  Link,
  Paragraph,
} from '~/components'
import { Title } from 'solid-meta'

export default () => {
  const schema = useParams().id

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <Show when={Schemas.names().includes(schema)} fallback={Fallback}>
      <Title>{t(['t13n', 'title']) + ' | ' + schema}</Title>
      <Link href="/transliteration">{t(['t13n-id', 'go back'])}</Link>
      <Paragraph>{t(['t13n-id', 'current-schema'], { schema })}</Paragraph>
      <Textarea
        spellcheck={false}
        placeholder={t(['t13n-id', 'input'])}
        onInput={e => setText(e.currentTarget.value)}
      />
      <Container responsive={true}>
        <Button
          onClick={() => {
            const translated = translate(text(), Schemas.get(schema))

            setOutput(translated)
          }}
        >
          {t(['t13n-id', 'button'])}!
        </Button>
        <CopyButton copy={output()} />
      </Container>
      <Textarea
        spellcheck={false}
        readOnly={true}
        placeholder={t(['t13n-id', 'output'])}
        value={output()}
      />
    </Show>
  )
}

const Fallback = () => {
  const title = t(['t13n-id', 'not exist'])

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Link href="/transliteration">{t(['t13n-id', 'view existing'])}</Link>
    </>
  )
}
