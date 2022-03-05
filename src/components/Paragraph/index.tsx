import type { JSX, Component } from 'solid-js'
import clsx from 'clsx'

import * as styles from './styles.css'

export const Paragraph: Component<
  JSX.HTMLAttributes<HTMLParagraphElement>
> = props => <p {...props} class={clsx(styles.text, props.class)} />
