import type { JSX, Component } from 'solid-js'

export * from './icons'

type NativeAttrs = JSX.SvgSVGAttributes<SVGSVGElement>

export const Icon: Component<NativeAttrs> = props => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    {props.children}
  </svg>
)
