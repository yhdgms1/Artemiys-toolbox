import type { JSX } from 'solid-js'

import * as styles from './style.css'

export const Textarea = (
  props: JSX.TextareaHTMLAttributes<HTMLTextAreaElement>
) => <textarea class={styles.textarea} {...props} />
