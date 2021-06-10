import { createSignal } from 'solid-js'
import * as styles from '../../styles/shared'
import Graphemer from 'graphemer'
import { t } from '../../i18n'
import { CopyButton, Textarea } from '../../components'
import { setTitle } from '../../helpers'

export default function () {
  setTitle('String Backwards')

  const [output, setOutput] = createSignal('')
  const splitter = new Graphemer()

  return (
    <>
      <h2 class={styles.big_text + ' ' + styles.padding_bottom_sm}>
        {t(['string-backwards', 'header'])}
      </h2>
      <Textarea
        placeholder={t(['string-backwards', 'input_textarea_placehoder'])}
        aria-placeholder={t(['string-backwards', 'input_textarea_placehoder'])}
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
        placeholder={t(['string-backwards', 'out_textarea_placehoder'])}
        aria-placeholder={t(['string-backwards', 'out_textarea_placehoder'])}
      />
    </>
  )
}
