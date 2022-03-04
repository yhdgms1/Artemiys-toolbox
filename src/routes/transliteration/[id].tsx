import * as styles from '~/styles/index.css'
import { useParams } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import { translate } from '@artemis69/iuliia'
import { t } from '~/i18n'
import {
  CopyButton,
  Textarea,
  Button,
  Container,
  Heading,
  Link,
} from '~/components'
import { Title } from 'solid-meta'
import { schemas } from '~/lib/transliteration/schemas'
import clsx from 'clsx'

export default () => {
  const schema = useParams().id

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Show when={schema in schemas} fallback={Fallback}>
        <Title>{t(['t13n', 'title']) + ' | ' + schema}</Title>
        <Link href="/transliteration">{t(['t13n-id', 'go back'])}</Link>
        <p class={styles.text}>
          {t(['t13n-id', 'current-schema'], { schema })}
        </p>
        <Textarea
          spellcheck={false}
          placeholder={t(['t13n-id', 'input'])}
          onInput={e => setText(e.currentTarget.value)}
        />
        <Container block={true} responsive={true}>
          <Button
            onClick={() => {
              //@ts-ignore
              setOutput(translate(text(), schemas[schema]))
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
    </>
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
