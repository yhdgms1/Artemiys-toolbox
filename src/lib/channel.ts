import { createSignal } from 'solid-js'
import type { Accessor, Setter } from 'solid-js'

interface Channel<T> {
  (): T
  (setter: Parameters<Setter<T>>[0]): T
}

const channel = <T>(init: T): Channel<T> => {
  const [get, set] = createSignal(init)

  function controller() {
    return !arguments.length ? get() : set(arguments[0])
  }

  return controller as Channel<T>
}

const fromSignal = <T>(arr: [Accessor<T>, Setter<T>]) => {
  const [get, set] = arr

  function controller() {
    return !arguments.length ? get() : set(arguments[0])
  }

  return controller as Channel<T>
}

channel.fromSignal = fromSignal

export { channel }
export type { Channel }
