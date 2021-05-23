import type { Component } from 'solid-js'
import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'

export default function (): Component {
  const [copyButtonContent, setCopyButtonContent] = createSignal(t(['btn__copy', 'default']))
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
        class={styles.button + ' ' + styles.copy_btn}
        onClick={() => {
          console.log(output())
          navigator.clipboard.writeText(output()).then(() => {
            setCopyButtonContent(t(['btn__copy', 'active']))
            const timeout = setTimeout(() => {
              setCopyButtonContent(t(['btn__copy', 'default']))
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
