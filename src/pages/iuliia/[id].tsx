import type { Component } from 'solid-js'
import * as styles from '../../styles/shared'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import schemas from './schemas'
import { translate } from '@artemis69/iuliia'
import CopyBtn from '../../components/ButtonCopy'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Title } from '../../components/Title'

export default function (props): Component {
  const schema = props.params.id

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Show when={schema in schemas} fallback={<Fallback />}>
        <Title>
          Iuliia | {schema}
        </Title>
        <Link class={clsx(styles.link, styles.big_text)} href="/iuliia">
          {t(['iuliia-id', 'go back'])}
        </Link>
        <p class={styles.text}>
          {t(['iuliia-id', 'current-schema'], { schema })}
        </p>
        <textarea
          class={styles.textarea}
          spellcheck="false"
          placeholder={t(['iuliia-id', 'input'])}
          aria-placeholder={t(['iuliia-id', 'input'])}
          onInput={e => setText(e.target.value)}
        />
        <div class={styles.responsive_container}>
          <button
            type="button"
            class={styles.button}
            onClick={() => setOutput(translate(text(), schemas[schema]))}
          >
            {t(['iuliia-id', 'button'])}!
          </button>
          <CopyBtn copy={output()} />
        </div>
        <textarea
          class={styles.textarea}
          spellcheck="false"
          readonly
          placeholder={t(['iuliia-id', 'output'])}
          aria-placeholder={t(['iuliia-id', 'output'])}
          value={output()}
        />
      </Show>
    </>
  )
}

const Fallback: Component = () => (
  <>
    <Title>
      Schema does not exist
    </Title>
    <p class={styles.big_text}>{t(['iuliia-id', 'not exist'])}</p>
    <Link class={styles.link} href="/iuliia">
      {t(['iuliia-id', 'view existing'])}
    </Link>
  </>
)
