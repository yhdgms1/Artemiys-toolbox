import { createSignal, onMount } from 'solid-js'
import Graphemer from 'graphemer'
import * as styles from '../../styles/shared'
import { t } from '../../i18n'
import { Textarea } from '../../components'
import { setTitle } from '../../helpers'

export default function () {
  setTitle('Text Length Counter')

  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <p class={styles.text}>
        {t(['text-length-counter', 'length'])}
        {splitter.countGraphemes(text())}
      </p>
      <p class={styles.text}>
        {t(['text-length-counter', 'length_without_ws'])}
        {splitter.countGraphemes(text().replaceAll(' ', ''))}
      </p>
      <Textarea
        placeholder={t(['text-length-counter', 'textarea_placeholder'])}
        aria-placeholder={t(['text-length-counter', 'textarea_placeholder'])}
        spellcheck={false}
        onInput={e => setText((e.target as HTMLInputElement).value)}
      ></Textarea>
    </>
  )
}
