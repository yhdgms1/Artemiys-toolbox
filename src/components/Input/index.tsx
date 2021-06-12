import type { JSX } from 'solid-js'
import clsx from 'clsx'

import * as styles from './style.css'

export default (props: JSX.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} class={clsx(styles.input, props.class)} />
)

export const Container = (props: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} class={clsx(styles.inputContainer, props.class)}>
    {props.children}
  </div>
)

export const Label = (props: JSX.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label {...props} class={clsx(styles.label, props.class)}>
    {props.children}
  </label>
)
