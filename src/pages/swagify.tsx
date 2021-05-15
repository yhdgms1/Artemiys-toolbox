import type { Component } from 'solid-js'
import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'

export default function (): Component {
  const [copyButtonContent, setCopyButtonContent] = createSignal('Copy!')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <textarea
        class={styles.textarea}
        placeholder="Enter the text to swagify"
        aria-placeholder="Enter the text to swagify"
        onInput={e => setOutput(swagify(e.target.value))}
      />
      <button
        type="button"
        class={styles.button}
        onClick={() => {
          console.log(output())
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
