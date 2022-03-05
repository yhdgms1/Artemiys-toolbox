import type { JSX, Component } from 'solid-js'
import * as styles from './style.css'

export const Radio: Component<
  JSX.InputHTMLAttributes<HTMLInputElement>
> = props => (
  <div class={styles.checkbox}>
    <input type="radio" {...props} class={styles.input} />
    <label for={props.id}>{props.children}</label>
  </div>
)
