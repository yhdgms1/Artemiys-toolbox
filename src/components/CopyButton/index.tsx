import type { JSX } from 'solid-js'

import { createSignal } from 'solid-js'
import { t } from '../../i18n'
import { Button } from '../index'
import clsx from 'clsx'

import * as styles from './style.css'

interface Props extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  copy: string
}

export const CopyButton = (props: Props) => {
  const [text, setText] = createSignal(t(['btn__copy', 'default']))

  const clickHandler = () => {
    try {
      navigator.clipboard.writeText(props.copy ?? '').then(() => {
        setText(t(['btn__copy', 'active']))
        const timeout = setTimeout(() => {
          setText(t(['btn__copy', 'default']))
          clearTimeout(timeout)
        }, 750)
      })
    } catch (_) {
      setText(t(['btn__copy', 'err']))
      const timeout = setTimeout(() => {
        setText(t(['btn__copy', 'default']))
        clearTimeout(timeout)
      }, 750)
    }
  }

  return <Button class={styles.copyButton} onClick={clickHandler}>{text()}!</Button>
}