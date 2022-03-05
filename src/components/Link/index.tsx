import { type Component, splitProps } from 'solid-js'
import { type LinkProps, Link } from 'solid-app-router'
import clsx from 'clsx'

import * as styles from './styles.css'

interface Props extends LinkProps {
  small?: boolean
  margin?: boolean
}

export const CustomLink: Component<Props> = props => {
  const [local, rest] = splitProps(props, ['class', 'small', 'margin'])
  const className = () =>
    clsx(
      styles.link,
      local.small ? '' : styles.large,
      local.margin && styles.margin,
      local.class
    )

  return <Link {...rest} class={className()} />
}
