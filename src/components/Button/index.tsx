import type { JSX, Component } from 'solid-js'
import { createSignal, onCleanup } from 'solid-js'
import { t } from '../../i18n'
import clsx from 'clsx'
import copy from 'copy-text-to-clipboard'
import * as styles from './style.css'

export const Button: Component<
  JSX.ButtonHTMLAttributes<HTMLButtonElement>
> = props => (
  <button type="button" {...props} class={clsx(styles.button, props.class)}>
    {props.children}
  </button>
)

export const CopyButton: Component<{ copy: string }> = props => {
  const defaultText = t(['btn__copy', 'default'])

  const [text, setText] = createSignal(defaultText)

  let timeout: number | undefined

  const clickHandler = () => {
    const copied = copy(props.copy)

    setText(t(['btn__copy', copied ? 'active' : 'err']))

    timeout = setTimeout(() => {
      setText(defaultText)
      clearTimeout(timeout)
    }, 750)
  }

  onCleanup(() => clearTimeout(timeout))

  return (
    <Button class={styles.copy} onClick={clickHandler}>
      {text()}!
    </Button>
  )
}
