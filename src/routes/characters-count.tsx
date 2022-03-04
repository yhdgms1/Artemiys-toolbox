import { createSignal } from 'solid-js'
import Graphemer from 'graphemer'
import { t } from '~/i18n'
import { Textarea, Heading } from '~/components'
import { Title } from 'solid-meta'

import * as styles from '~/styles/index.css'

export default () => {
  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  const title = t(['character-count', 'title'])

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
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
