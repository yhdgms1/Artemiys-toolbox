import type { JSX, Component } from 'solid-js'

import * as styles from './style.css'

export const Textarea: Component<
  JSX.TextareaHTMLAttributes<HTMLTextAreaElement>
> = props => <textarea class={styles.textarea} {...props} />
