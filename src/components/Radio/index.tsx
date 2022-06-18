import type { JSX, Component } from 'solid-js'
import * as styles from './style.css'

type NativeInputAttrs = JSX.InputHTMLAttributes<HTMLInputElement>

export const Radio: Component<NativeInputAttrs> = props => (
  <div class={styles.checkbox}>
    <input type="radio" {...props} class={styles.input} />
    <label for={props.id}>{props.children}</label>
  </div>
)
