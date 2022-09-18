import type { VoidComponent } from 'solid-js'
import { createSignal, onCleanup } from 'solid-js'
import { t } from '../../i18n'
import { Button } from 'disgraceful-ui'
import copy from 'copy-text-to-clipboard'

import * as styles from './style.css'

export const CopyButton: VoidComponent<{ copy: string }> = props => {
  const defaultText = t('global.0')

  const [text, setText] = createSignal(defaultText)

  let timeout: number | undefined

  const clickHandler = () => {
    const copied = copy(props.copy)

    setText(t(copied ? 'global.1' : 'global.2'))

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
