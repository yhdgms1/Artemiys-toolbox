import type { JSX, Component } from 'solid-js'
import { splitProps } from 'solid-js'
import clsx from 'clsx'

import * as styles from './styles.css'

interface Props extends JSX.HTMLAttributes<HTMLParagraphElement> {
  margin?: boolean
}

export const Paragraph: Component<Props> = props => {
  const [local, rest] = splitProps(props, ['margin', 'class'])

  return (
    <p
      {...rest}
      class={clsx(styles.text, local.class, local.margin && styles.margin)}
    />
  )
}
