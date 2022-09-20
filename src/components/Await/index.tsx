import type { JSXElement } from 'solid-js'

import { Show, createComponent, createSignal } from 'solid-js'

interface AwaitProps<T> {
  for: Promise<T>
  children: (value: T) => JSXElement
}

interface AwaitState<T> {
  status: 'waiting' | 'resolved' | 'failed'
  value?: T
}

function Await<T extends unknown>(props: AwaitProps<T>) {
  const wait = props.for
  const children = props.children

  const [state, setState] = createSignal<AwaitState<T>>({
    status: 'waiting',
  })

  wait.then(value => {
    setState({
      status: 'resolved',
      value: value,
    })
  })

  wait.catch(() => {
    setState({
      status: 'failed',
    })
  })

  return createComponent(Show, {
    get when() {
      return state().status === 'resolved'
    },
    get children() {
      return children(state().value!)
    },
  })
}

export { Await }
