import * as styles from '~/styles/index.css'
import { Link, useParams } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import { translate } from '@artemis69/iuliia'
import { t } from '~/i18n'
import { CopyButton, Textarea, Button, Container } from '~/components'
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
        <Link
          class={clsx(styles.link, styles.heading2)}
          href="/transliteration"
        >
          {t(['t13n-id', 'go back'])}
        </Link>
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
  return (
    <>
      <Title>{t(['t13n-id', 'not exist'])}</Title>
      <p class={styles.heading2}>{t(['t13n-id', 'not exist'])}</p>
      <Link class={styles.link} href="/transliteration">
        {t(['t13n-id', 'view existing'])}
      </Link>
    </>
  )
}
