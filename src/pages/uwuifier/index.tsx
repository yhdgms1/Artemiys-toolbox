import Uwuifier from 'uwuifier'
import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { CopyButton, Textarea } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle(t(['uwuifier', 'title']))

  const uwuifier = new Uwuifier()
  const [output, setOutput] = createSignal('')

  return (
    <>
      <h2 class={styles.heading2}>{t(['uwuifier', 'title'])}</h2>
      <Textarea
        placeholder={t(['uwuifier', 'input'])}
        onInput={e =>
          setOutput(
            uwuifier.uwuifySentence((e.target as HTMLInputElement).value)
          )
        }
      />
      <CopyButton copy={output()} />
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t(['uwuifier', 'output'])}
      />
    </>
  )
}
