import type { JSX } from 'solid-js'

import * as styles from './style.css'
import clsx from 'clsx'

export const Select = (props: JSX.SelectHTMLAttributes<HTMLSelectElement>) => (
  <label class={styles.label}>
    <span class={styles.title}>{props.title}</span>
    <select {...props} class={styles.select}>
      {props.children}
    </select>
  </label>
)
