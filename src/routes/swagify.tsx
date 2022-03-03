import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import * as styles from '~/styles/index.css'
import { t } from '~/i18n'
import { CopyButton, Textarea, Button, Container } from '~/components'
import { Title } from 'solid-meta'

export default () => {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Title>{t(['swagify', 'title'])}</Title>
      <h2 class={styles.heading2}>{t(['swagify', 'title'])}</h2>
      <Textarea
        placeholder={t(['swagify', 'Enter the text to swagify'])}
        onInput={e => setText(e.currentTarget.value)}
      />
      <Container block={true} responsive={true}>
        <Button onClick={() => setOutput(swagify(text()))}>Swagify!</Button>
        <CopyButton copy={output()} />
      </Container>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t('Result will be here')}
      />
    </>
  )
}
