import * as styles from '../../styles/index.css'
import { Link, useParams } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import { translate } from '@artemis69/iuliia'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import { setTitle } from '../../helpers'
import schemas from './schemas'
import clsx from 'clsx'

export default () => {
  const schema = useParams().id

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Show when={schema in schemas} fallback={Fallback}>
        {setTitle(t(['t13n', 'title']) + ' | ' + schema)}
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
        <div class={styles.responsive_container}>
          <Button
            onClick={() => {
              //@ts-ignore
              setOutput(translate(text(), schemas[schema]))
            }}
          >
            {t(['t13n-id', 'button'])}!
          </Button>
          <CopyButton copy={output()} />
        </div>
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
  setTitle(t(['t13n-id', 'not exist']))
  return (
    <>
      <p class={styles.heading2}>{t(['t13n-id', 'not exist'])}</p>
      <Link class={styles.link} href="/transliteration">
        {t(['t13n-id', 'view existing'])}
      </Link>
    </>
  )
}
