const cs = String.fromCharCode(
  99,
  104,
  101,
  97,
  112,
  32,
  115,
  108,
  117,
  116,
  115
)

const cdashs = String.fromCharCode(
  99,
  104,
  101,
  97,
  112,
  45,
  115,
  108,
  117,
  116,
  115
)

const isServer = typeof window === 'undefined'

export { cs, cdashs, isServer }
