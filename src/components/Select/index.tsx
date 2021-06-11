import type { JSX } from 'solid-js'

import * as styles from './style.css'
import clsx from 'clsx'

export const Select = (props: JSX.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select {...props} class={clsx(styles.select, props.class)}>
    {props.children}
  </select>
)
