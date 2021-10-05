import type { JSX, Component } from 'solid-js'

import { splitProps } from 'solid-js'
import * as styles from './style.css'
import clsx from 'clsx'

interface Props extends JSX.SelectHTMLAttributes<HTMLSelectElement> {
  selectClassName: string
}

export const Select: Component<Props> = props => (
  <label class={styles.label}>
    <span class={styles.title}>{props.title}</span>
    <select
      {...splitProps(props, ['selectclassname'])[0]}
      class={clsx(styles.select, props.selectClassName)}
    >
      {props.children}
    </select>
  </label>
)
