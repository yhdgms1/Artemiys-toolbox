import type { JSX } from 'solid-js'
import clsx from 'clsx'
import * as styles from './style.css'

export const InputContainer = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} class={clsx(styles.inputContainer, props.class)}>
    {props.children}
  </div>
)

export const Input = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => (
  <label class={styles.label}>
    <span class={styles.title}>{props.children}</span>
    <input {...props} class={styles.input} />
  </label>
)
