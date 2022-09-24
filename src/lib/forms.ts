import type { JSX } from 'solid-js'

type OnSubmit = JSX.EventHandlerUnion<
  HTMLFormElement,
  Event & {
    submitter: HTMLElement
  }
>

const createNamedItemReceiver = (lmnts: HTMLFormControlsCollection) => {
  return lmnts.namedItem.bind(lmnts) as (el: string) => HTMLInputElement
}

const inlineStyles = (): JSX.CSSProperties => {
  return {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  }
}

export { createNamedItemReceiver, inlineStyles }
export type { OnSubmit }
