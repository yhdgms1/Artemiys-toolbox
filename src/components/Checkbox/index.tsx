import type { JSX, Component } from 'solid-js'
import * as styles from './style.css'

export const Checkbox: Component<
  JSX.InputHTMLAttributes<HTMLInputElement>
> = props => (
  <div class={styles.checkbox}>
    <input type="checkbox" {...props} class={styles.input} />
    <label class={styles.label} for={props.id}>
      {props.children}
    </label>
  </div>
)
