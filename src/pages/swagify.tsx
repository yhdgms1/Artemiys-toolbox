import type { Component } from 'solid-js'
import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'
import CopyBtn from '../components/ButtonCopy'

export default function (): Component {
  const [output, setOutput] = createSignal('')

  return (
    <>
      <textarea
        class={styles.textarea}
        placeholder="Enter the text to swagify"
        aria-placeholder="Enter the text to swagify"
        onInput={e => setOutput(swagify(e.target.value))}
      />
      <CopyBtn copy={output()}/>
      <textarea
        readonly
        class={styles.textarea}
        value={output()}
        placeholder="Result will be here"
        aria-placeholder="Result will be here"
      />
    </>
  )
}
