import { createSignal } from 'solid-js'
import type { Accessor, Setter } from 'solid-js'

interface Channel<T> {
  (): T
  (setter: Parameters<Setter<T>>[0]): T
}

function channel<T>(init: T, singal?: false): Channel<T>
function channel<T>(init: [Accessor<T>, Setter<T>], singal: true): Channel<T>
function channel<T>(init: T | [Accessor<T>, Setter<T>], singal?: boolean) {
  // prettier-ignore
  const [get, set] = (singal ? init : createSignal(init)) as unknown as [Accessor<T>, Setter<T>];

  function controller() {
    return !arguments.length ? get() : set(arguments[0])
  }

  return controller as Channel<T>
}

export { channel }
export type { Channel }
