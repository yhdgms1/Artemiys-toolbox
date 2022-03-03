import { createSignal, onMount } from 'solid-js'
import Graphemer from 'graphemer'
import * as styles from '../styles/index.css'
import { t } from '../i18n'
import { Textarea } from '../components'
import { Title } from 'solid-meta'

export default () => {
  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <Title>{t(['character-count', 'title'])}</Title>
      <h2 class={styles.heading2}>{t(['character-count', 'title'])}</h2>
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
        spellcheck={false}
        onInput={e => setText(e.currentTarget.value)}
      />
    </>
  )
}