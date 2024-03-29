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

const RU_FLAG_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36"><path fill="#CE2028" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z"/><path fill="#22408C" d="M0 13h36v10H0z"/><path fill="#EEE" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"/></svg>`

const isServer = typeof window === 'undefined'

export { cs, cdashs, isServer, RU_FLAG_SVG }
