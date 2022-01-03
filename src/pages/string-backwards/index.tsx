import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import Graphemer from 'graphemer'
import { t } from '../../i18n'
import { CopyButton, Textarea } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle(t(['string-backwards', 'header']))

  const [output, setOutput] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <h2 class={styles.heading2}>{t(['string-backwards', 'header'])}</h2>
      <Textarea
        placeholder={t('Enter the text here')}
        onInput={e =>
          setOutput(
            splitter.splitGraphemes(e.currentTarget.value).reverse().join('')
          )
        }
      />
      <CopyButton copy={output()} />
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t(['string-backwards', 'Text backwards will be here'])}
      />
    </>
  )
}
