import type { JSX, Component } from 'solid-js'

import * as styles from './style.css'
import clsx from 'clsx'

export const Select: Component<
  JSX.SelectHTMLAttributes<HTMLSelectElement>
> = props => (
  <label class={styles.label}>
    <span class={styles.title}>{props.title}</span>
    <select {...props} class={clsx(styles.select, props.class)}>
      {props.children}
    </select>
  </label>
)
