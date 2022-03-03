import { createSignal } from 'solid-js'
import { t } from '~/i18n'
import { CopyButton, Textarea, Button, Container } from '~/components'
import { Title } from 'solid-meta'
import {
  pascalCase,
  camelCase,
  kebabCase,
  snakeCase,
  upperFirst,
  lowerFirst,
} from 'scule'

import * as styles from '~/styles/index.css'

export default () => {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Title>Scule</Title>
      <h2 class={styles.heading2}>Scule</h2>
      <Textarea
        placeholder={t('Enter the text here')}
        spellcheck={false}
        onInput={e => setText(e.currentTarget.value)}
      />
      <Container block={true} responsive={true}>
        <Button onClick={() => setOutput(pascalCase(text()))}>
          pascalCase
        </Button>
        <Button onClick={() => setOutput(camelCase(text()))}>camelCase</Button>
        <Button onClick={() => setOutput(kebabCase(text()))}>kebabCase</Button>
        <Button onClick={() => setOutput(snakeCase(text()))}>snakeCase</Button>
        <Button onClick={() => setOutput(upperFirst(text()))}>
          upperFirst
        </Button>
        <Button onClick={() => setOutput(lowerFirst(text()))}>
          lowerFirst
        </Button>
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
