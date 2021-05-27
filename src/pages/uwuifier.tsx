import type { Component } from 'solid-js'
import Uwuifier from 'uwuifier'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'
import CopyBtn from '../components/ButtonCopy'

export default function (): Component {
  const uwuifier = new Uwuifier()

  const [output, setOutput] = createSignal('')

  return (
    <>
      <textarea
        class={styles.textarea}
        placeholder="Enter the text to uwuify"
        aria-placeholder="Enter the text to uwuify"
        onInput={e => setOutput(uwuifier.uwuifySentence(e.target.value))}
      />
      <CopyBtn copy={output()} />
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
