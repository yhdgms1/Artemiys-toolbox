import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'

const flipTable: { [key: string]: string } = {
  a: '\u0250',
  b: 'q',
  c: '\u0254',
  d: 'p',
  e: '\u01DD',
  f: '\u025F',
  g: '\u0183',
  h: '\u0265',
  i: '\u0131',
  j: '\u027E',
  k: '\u029E',
  m: '\u026F',
  n: 'u',
  r: '\u0279',
  t: '\u0287',
  v: '\u028C',
  w: '\u028D',
  y: '\u028E',
  '.': '\u02D9',
  '[': ']',
  '(': ')',
  '{': '}',
  '?': '\u00BF',
  '!': '\u00A1',
  "'": ',',
  '<': '>',
  _: '\u203E',
  '\u203F': '\u2040',
  '\u2045': '\u2046',
  '\u2234': '\u2235',
  '\r': '\n',
  а: 'ɐ',
  б: 'ƍ',
  в: 'ʚ',
  г: 'ɹ',
  д: 'ɓ',
  е: 'ǝ',
  ё: 'ǝ',
  ж: 'ж',
  з: 'ε',
  и: 'и',
  й: 'ņ',
  к: 'ʞ',
  л: 'v',
  м: 'w',
  н: 'н',
  о: 'о',
  п: 'u',
  р: 'd',
  с: 'ɔ',
  т: 'ɯ', // ʟ ɯ ￌ
  у: 'ʎ',
  ф: 'ф',
  х: 'х',
  ц: 'ǹ',
  ч: 'Һ',
  ш: 'm',
  щ: 'm',
  ъ: 'q',
  ы: 'ıq',
  ь: 'q',
  э: 'є',
  ю: 'oı',
  я: 'ʁ',
}

function flipString(str: string, flip: { [key: string]: string }): string {
  const last = str.length - 1
  let result = new Array(str.length)
  for (let i = last; i >= 0; --i) {
    const c = str.charAt(i)
    const r = flip[c]
    result[last - i] = r ? r : c
  }
  return result.join('')
}

export default function (): Component {
  const [text, setText] = createSignal('')

  return (
    <>
      <h1 class={styles.big_text + ' ' + styles.padding_bottom_sm}>
        turning text upside down and backwards
      </h1>
      <textarea
        class={styles.textarea}
        placeholder="Type plain text"
        aria-placeholder="Type plain text"
        onInput={e => setText(e.target.value)}
      />
      <p>upside down text:</p>
      <textarea
        readonly
        class={styles.textarea}
        value={flipString(text().toLowerCase(), flipTable)}
        placeholder="upside down text will be here"
        aria-placeholder="upside down text will be here"
      />
      <p>text backwards:</p>
      <textarea
        readonly
        class={styles.textarea}
        value={text().split('').reverse().join('')}
        placeholder="text backwards text will be here"
        aria-placeholder="text backwards text will be here"
      />
    </>
  )
}
