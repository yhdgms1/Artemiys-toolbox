import * as styles from '../../styles/shared'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import schemas from './schemas'
import { translate } from '@artemis69/iuliia'
import clsx from 'clsx'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import { setTitle } from '../../helpers'

export default function (props) {
  const schema = props.params.id

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Show when={schema in schemas} fallback={<Fallback />}>
        {setTitle(t(['t13n', 'title']) + ' | ' + schema)}
        <Link
          class={clsx(styles.link, styles.big_text)}
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
          aria-placeholder={t(['t13n-id', 'input'])}
          onInput={e => setText((e.target as HTMLInputElement).value)}
        />
        <div class={styles.responsive_container}>
          <Button onClick={() => setOutput(translate(text(), schemas[schema]))}>
            {t(['t13n-id', 'button'])}!
          </Button>
          <CopyButton copy={output()} />
        </div>
        <Textarea
          spellcheck={false}
          readonly
          placeholder={t(['t13n-id', 'output'])}
          aria-placeholder={t(['t13n-id', 'output'])}
          value={output()}
        />
      </Show>
    </>
  )
}

const Fallback = () => (
  <>
    {setTitle(t(['t13n-id', 'not exist']))}
    <p class={styles.big_text}>{t(['t13n-id', 'not exist'])}</p>
    <Link class={styles.link} href="/transliteration">
      {t(['t13n-id', 'view existing'])}
    </Link>
  </>
)
