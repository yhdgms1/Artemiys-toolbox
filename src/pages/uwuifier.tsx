import Uwuifier from 'uwuifier'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'
import { CopyBtn, Title } from '../components'

export default function () {
  const uwuifier = new Uwuifier()

  const [output, setOutput] = createSignal('')

  return (
    <>
      <Title>Uwuifier</Title>
      <textarea
        class={styles.textarea}
        placeholder={t(['uwuifier', 'input'])}
        aria-placeholder={t(['uwuifier', 'input'])}
        onInput={e =>
          setOutput(
            uwuifier.uwuifySentence((e.target as HTMLInputElement).value)
          )
        }
      />
      <CopyBtn copy={output()} />
      <textarea
        readonly
        class={styles.textarea}
        value={output()}
        placeholder={t(['uwuifier', 'output'])}
        aria-placeholder={t(['uwuifier', 'output'])}
      />
    </>
  )
}
