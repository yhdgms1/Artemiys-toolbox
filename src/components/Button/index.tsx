import type { JSX, Component } from 'solid-js'
import { createSignal } from 'solid-js'
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

interface CopyButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  copy: string
}

export const CopyButton: Component<CopyButtonProps> = props => {
  const [text, setText] = createSignal(t(['btn__copy', 'default']))

  const clickHandler = () => {
    const copied = copy(props.copy || '')

    setText(copied ? t(['btn__copy', 'active']) : t(['btn__copy', 'err']))

    const timeout = setTimeout(() => {
      setText(t(['btn__copy', 'default']))
      clearTimeout(timeout)
    }, 750)
  }

  return (
    <Button class={styles.copy} onClick={clickHandler}>
      {text()}!
    </Button>
  )
}
