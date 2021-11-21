import type { JSX, Component } from 'solid-js'

export * from './icons'

export const Icon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = props => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    {props.children}
  </svg>
)
