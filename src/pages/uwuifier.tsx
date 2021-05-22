import type { Component } from 'solid-js'
//vite is shit -> import deno version
import Uwuifier from '../modules/uwuifier'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'

export default function (): Component {
  const uwuifier = new Uwuifier()

  const [copyButtonContent, setCopyButtonContent] = createSignal('Copy!')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <textarea
        class={styles.textarea}
        placeholder="Enter the text to uwuify"
        aria-placeholder="Enter the text to uwuify"
        onInput={e => setOutput(uwuifier.uwuifySentence(e.target.value))}
      />
      <button
        type="button"
        class={styles.button + ' ' + styles.copy_btn}
        onClick={() => {
          navigator.clipboard.writeText(output()).then(() => {
            setCopyButtonContent('Copied!')
            const timeout = setTimeout(() => {
              setCopyButtonContent('Copy!')
              clearTimeout(timeout)
            }, 750)
          })
        }}
      >
        {copyButtonContent()}
      </button>
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
