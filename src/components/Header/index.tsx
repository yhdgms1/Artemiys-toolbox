import type { Component } from 'solid-js'
import * as styles from './styles.css'

export const Header: Component = props => {
  return <header class={styles.header}>{props.children}</header>
}
