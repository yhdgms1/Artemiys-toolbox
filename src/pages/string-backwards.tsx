import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import Graphemer from 'graphemer'
import { t } from '../i18n'

export default function (): Component {
  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <h1 class={styles.big_text + ' ' + styles.padding_bottom_sm}>
        {t(['string_backwards', 'header'])}
      </h1>
      <textarea
        class={styles.textarea}
        placeholder={t(['string_backwards', 'input_textarea_placehoder'])}
        aria-placeholder={t(['string_backwards', 'input_textarea_placehoder'])}
        onInput={e => setText(e.target.value)}
      />
      <p>{t(['string_backwards', 'out_textarea_description'])}</p>
      <textarea
        readonly
        class={styles.textarea}
        value={splitter.splitGraphemes(text()).reverse().join('')}
        placeholder={t(['string_backwards', 'out_textarea_placehoder'])}
        aria-placeholder={t(['string_backwards', 'out_textarea_placehoder'])}
      />
    </>
  )
}
