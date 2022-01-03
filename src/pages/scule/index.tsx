import { createSignal } from 'solid-js'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import { setTitle } from '../../helpers'
import {
  pascalCase,
  camelCase,
  kebabCase,
  snakeCase,
  upperFirst,
  lowerFirst,
} from 'scule'

import * as styles from '../../styles/index.css'

export default () => {
  setTitle('Scule')

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <h2 class={styles.heading2}>Scule</h2>
      <Textarea
        placeholder={t('Enter the text here')}
        spellcheck={false}
        onInput={e => setText(e.currentTarget.value)}
      />
      <div class={styles.responsive_container}>
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
      </div>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t('Result will be here')}
      />
    </>
  )
}
