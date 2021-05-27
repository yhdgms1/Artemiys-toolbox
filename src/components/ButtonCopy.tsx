import type { Component, JSX } from 'solid-js'
import { createSignal } from 'solid-js'
import { t } from '../i18n'
import * as styles from '../styles/shared'

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  copy: string
}

export default function (props: Props): Component {
  const [text, setText] = createSignal(t(['btn__copy', 'default']))

  return (
    <button
      type="button"
      class={styles.button + ' ' + styles.copy_btn}
      onClick={() => {
        navigator.clipboard.writeText(props.copy ?? '').then(() => {
          setText(t(['btn__copy', 'active']))
          const timeout = setTimeout(() => {
            setText(t(['btn__copy', 'default']))
            clearTimeout(timeout)
          }, 750)
        })
      }}
    >
      {text()}
    </button>
  )
}
