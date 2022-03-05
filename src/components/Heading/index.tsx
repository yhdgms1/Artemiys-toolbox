import type { Component } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import clsx from 'clsx'
import * as styles from './styles.css'

export const Heading: Component<{
  as: 'h1' | 'h2'
  class?: string
}> = props => {
  const className = clsx(styles[props.as], props.class)

  return (
    <Dynamic component={props.as} class={className}>
      {props.children}
    </Dynamic>
  )
}
