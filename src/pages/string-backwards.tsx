import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import Graphemer from 'graphemer'

export default function (): Component {
  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <h1 class={styles.big_text + ' ' + styles.padding_bottom_sm}>
        turning text backwards
      </h1>
      <textarea
        class={styles.textarea}
        placeholder="Type plain text"
        aria-placeholder="Type plain text"
        onInput={e => setText(e.target.value)}
      />
      <p>text backwards:</p>
      <textarea
        readonly
        class={styles.textarea}
        value={splitter.splitGraphemes(text()).reverse().join('')}
        placeholder="text backwards text will be here"
        aria-placeholder="text backwards text will be here"
      />
    </>
  )
}
