import type { JSX, Component } from 'solid-js'
import clsx from 'clsx'
import * as styles from './style.css'

export const Input: Component<
  JSX.InputHTMLAttributes<HTMLInputElement>
> = props => (
  <label class={styles.label}>
    <span class={styles.title}>{props.children}</span>
    <input {...props} class={clsx(styles.input, props.class)} />
  </label>
)
