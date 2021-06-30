import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import Graphemer from 'graphemer'
import { t } from '../../i18n'
import { CopyButton, Textarea } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('String Backwards')

  const [output, setOutput] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <h2 class={styles.big_text}>{t(['string-backwards', 'header'])}</h2>
      <Textarea
        placeholder={t(['string-backwards', 'Type text'])}
        aria-placeholder={t(['string-backwards', 'Type text'])}
        onInput={e =>
          setOutput(
            splitter
              .splitGraphemes((e.target as HTMLInputElement).value)
              .reverse()
              .join('')
          )
        }
      />
      <CopyButton copy={output()} />
      <Textarea
        readonly
        value={output()}
        placeholder={t(['string-backwards', 'Text backwards will be here'])}
        aria-placeholder={t([
          'string-backwards',
          'Text backwards will be here',
        ])}
      />
    </>
  )
}
