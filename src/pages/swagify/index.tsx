import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Swagify')

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Textarea
        placeholder="Enter the text to swagify"
        aria-placeholder="Enter the text to swagify"
        onInput={e => setText((e.target as HTMLInputElement).value)}
      />
      <div class={styles.responsive_container}>
        <Button onClick={() => setOutput(swagify(text()))}>Swagify!</Button>
        <CopyButton copy={output()} />
      </div>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t(['swagify', 'result'])}
        aria-placeholder={t(['swagify', 'result'])}
      />
    </>
  )
}
