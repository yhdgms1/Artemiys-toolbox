import type { JSX } from 'solid-js'
import clsx from 'clsx'

import * as styles from './style.css'

export const Input = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} class={clsx(styles.input, props.class)} />
)
