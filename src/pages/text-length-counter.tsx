import type { Component } from 'solid-js'
import { createSignal, onMount } from 'solid-js'
import Graphemer from 'graphemer'
import * as styles from '../styles/shared'
import { t } from '../i18n'

export default function (): Component {
  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <p class={styles.text}>
        {t(['text-length-counter', 'length'])}
        {splitter.countGraphemes(text())}
      </p>
      <p class={styles.text}>
        {t(['text-length-counter', 'length_without_ws'])}
        {splitter.countGraphemes(text().replaceAll(' ', ''))}
      </p>
      <textarea
        placeholder={t(['text-length-counter', 'textarea_placeholder'])}
        aria-placeholder={t(['text-length-counter', 'textarea_placeholder'])}
        class={styles.textarea}
        spellcheck="false"
        onInput={e => setText(e.target.value)}
      ></textarea>
    </>
  )
}
