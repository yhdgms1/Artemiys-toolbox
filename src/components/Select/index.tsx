import type { JSX, Component } from 'solid-js'

import { Icon, ArrowDown } from '..'

import * as styles from './style.css'
import clsx from 'clsx'

type NativeAttrs = JSX.SelectHTMLAttributes<HTMLSelectElement>

export const Select: Component<NativeAttrs> = props => (
  <label class={styles.label}>
    <span class={styles.title}>{props.title}</span>
    <select {...props} class={clsx(styles.select, props.class)}>
      {props.children}
    </select>
    <Icon class={styles.icon} aria-hidden={true}>
      <ArrowDown />
    </Icon>
  </label>
)
