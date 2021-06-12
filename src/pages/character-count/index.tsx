import { createSignal, onMount } from 'solid-js'
import Graphemer from 'graphemer'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { Textarea } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Text Length Counter')

  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <p class={styles.text}>
        {t(['character-count', 'Number of characters'])}
        {splitter.countGraphemes(text())}
      </p>
      <p class={styles.text}>
        {t(['character-count', 'Number of characters without whitespaces'])}
        {splitter.countGraphemes(text().replace(/ /g, ''))}
      </p>
      <Textarea
        placeholder={t(['character-count', 'textarea'])}
        aria-placeholder={t(['character-count', 'textarea'])}
        spellcheck={false}
        onInput={e => setText((e.target as HTMLInputElement).value)}
      />
    </>
  )
}
