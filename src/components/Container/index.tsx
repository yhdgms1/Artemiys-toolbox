import type { Component, JSXElement } from 'solid-js'
import clsx from 'clsx'
import * as styles from './styles.css'

interface Props {
  children: JSXElement
  independent?: boolean
  responsive?: boolean
  block?: boolean
  class?: string
}

export const Container: Component<Props> = props => {
  return (
    <div
      class={clsx(props.block ? '' : styles.container, props.class)}
      classList={{
        [styles.independent]: props.independent,
        [styles.responsive]: props.responsive,
      }}
    >
      {props.children}
    </div>
  )
}
