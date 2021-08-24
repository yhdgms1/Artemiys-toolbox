import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { CopyButton, Button, Textarea } from '../../components'
import rules from './rules'
import { setTitle } from '../../helpers'

export default () => {
  setTitle(t(['punto-switcher', 'title']))

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  const setCharAt = (string: string, index: number, char: string) =>
    index > string.length - 1
      ? string
      : string.substr(0, index) + char + string.substr(index + 1)

  const changeLayout = (string: string): string => {
    if (string.length > 0) {
      for (let i = 0; i < string.length; i++) {
        const key = string.charAt(i)

        if (rules.hasOwnProperty(key)) {
          string = setCharAt(string, i, rules[key])
        }
      }
    }

    return string
  }

  return (
    <>
      <h2 class={styles.heading2}>{t(['punto-switcher', 'title'])}</h2>
      <Textarea
        placeholder={t(['punto-switcher', 'input-placeholder'])}
        onInput={e => setText(e.currentTarget.value)}
      />
      <div class={styles.responsive_container}>
        <Button onClick={() => setOutput(changeLayout(text()))}>
          {t(['punto-switcher', 'button'])}!
        </Button>
        <CopyButton copy={output()} />
      </div>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t(['punto-switcher', 'result'])}
      />
    </>
  )
}
