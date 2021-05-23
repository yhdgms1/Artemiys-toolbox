import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import Graphemer from 'graphemer'
import { t } from '../i18n'
import CopyBtn from '../components/ButtonCopy'

export default function (): Component {
  const [output, setOutput] = createSignal('')
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
        onInput={e => setOutput(splitter.splitGraphemes(e.target.value).reverse().join(''))}
      />
      <CopyBtn copy={output()}/>
      <textarea
        readonly
        class={styles.textarea}
        value={output()}
        placeholder={t(['string_backwards', 'out_textarea_placehoder'])}
        aria-placeholder={t(['string_backwards', 'out_textarea_placehoder'])}
      /> 
    </>
  )
}
