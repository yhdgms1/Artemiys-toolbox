import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle(t(['text-case-changer', 'title']))

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Textarea
        placeholder={t(['text-case-changer', 'Enter the text here'])}
        aria-placeholder={t(['text-case-changer', 'Enter the text here'])}
        onInput={e => setText((e.target as HTMLInputElement).value)}
      />
      <div class={styles.responsive_container}>
        <Button onClick={() => setOutput(text().toUpperCase())}>{t(['text-case-changer', 'to uppercase'])}!</Button>
        <Button onClick={() => setOutput(text().toLowerCase())}>{t(['text-case-changer', 'to lowercase'])}!</Button>
        <CopyButton copy={output()} />
      </div>
      <Textarea
        readOnly="true"
        value={output()}
        placeholder={t(['text-case-changer', 'Result will be here'])}
        aria-placeholder={t(['text-case-changer', 'Result will be here'])}
      />
    </>
  )
}
