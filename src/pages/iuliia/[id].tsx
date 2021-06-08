import * as styles from '../../styles/shared'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import type { Component } from 'solid-js'
import schemas from './schemas.js'
import { translate } from '@artemis69/iuliia'
import CopyBtn from '../../components/ButtonCopy'
import clsx from 'clsx';

export default function (props): Component {
  const schema = props.params.id

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Show when={schema in schemas} fallback={<Fallback />}>
        <Link class={clsx(styles.link, styles.big_text)} href="/iuliia">
          go back
        </Link>
        <p class={styles.text}>Current schema is {schema}</p>
        <textarea
          class={styles.textarea}
          spellcheck="false"
          placeholder="Type the text here"
          aria-placeholder="Type the text here"
          onInput={e => setText(e.target.value)}
        />
        <div class={styles.responsive_container}>
          <button
            type="button"
            class={styles.button}
            onClick={() => setOutput(translate(text(), schemas[schema]))}
          >
            Transliterate!
          </button>
          <CopyBtn copy={output()} />
        </div>
        <textarea
          class={styles.textarea}
          spellcheck="false"
          readonly
          placeholder="Transliterated text will be here"
          aria-placeholder="Transliterated text will be here"
          value={output()}
        />
      </Show>
    </>
  )
}

const Fallback: Component = () => (
  <>
    <p class={styles.big_text}>Schema does not exists</p>
    <Link class={styles.link} href="/iuliia">
      view existing
    </Link>
  </>
)
