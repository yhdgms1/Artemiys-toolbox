import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'
import CopyBtn from '../components/ButtonCopy'
import clsx from 'clsx'

export default function (): Component {
  const [text, setText] = createSignal('')
  const [count, setCount] = createSignal(0)
  const [output, setOutput] = createSignal('')

  return (
    <>
      <div class={clsx(styles.text, styles.responsive_container)}>
        <label>{t(['repeat-it-n-times', 'repeat'])}</label>
        <input
          type="text"
          placeholder={t(['repeat-it-n-times', 'it'])}
          class={styles.input}
          onInput={e => setText(e.target.value)}
          spellcheck="false"
        />
        <input
          type="number"
          placeholder={t(['repeat-it-n-times', 'so many'])}
          class={styles.input}
          onInput={e => setCount(e.target.valueAsNumber)}
          min="1"
          max="5368708"
        />
        <label>{t(['repeat-it-n-times', 'times'])}</label>
      </div>
      <div class={styles.responsive_container}>
        <button
          type="button"
          class={styles.button}
          onClick={() =>
            count() <= 5368708
              ? setOutput(text().repeat(count()))
              : alert('The number is too high')
          }
        >
          {t(['repeat-it-n-times', 'repeat'])}!
        </button>
        <CopyBtn copy={output()} />
      </div>
      <textarea
        readonly
        class={styles.textarea}
        value={output()}
        placeholder={t(['repeat-it-n-times', 'result'])}
        aria-placeholder={t(['repeat-it-n-times', 'result'])}
      />
    </>
  )
}
