import type { JSX } from 'solid-js'
import clsx from 'clsx'
import * as styles from './style.css'

export const Input = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => (
  <label class={styles.label}>
    <span class={styles.title}>{props.children}</span>
    <input {...props} class={styles.input} />
  </label>
)
