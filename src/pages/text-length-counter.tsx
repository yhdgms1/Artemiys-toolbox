import type { Component } from 'solid-js'
import { createSignal, onMount } from 'solid-js'
import Graphemer from 'graphemer'
import * as styles from '../styles/shared'

export default function (): Component {
  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <p class={styles.text}>Length: {splitter.countGraphemes(text())}</p>
      <p class={styles.text}>
        Length without whitespaces:{' '}
        {splitter.countGraphemes(text().replaceAll(' ', ''))}
      </p>
      <textarea
        placeholder="Input your text here to count"
        aria-placeholder="Input your text here to count"
        class={styles.textarea}
        spellcheck="false"
        onInput={e => setText(e.target.value)}
      ></textarea>
    </>
  )
}
