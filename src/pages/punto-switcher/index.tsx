import { createSignal } from 'solid-js'
import * as styles from '../../styles/shared'
import { t } from '../../i18n'
import { Title, CopyButton, Button, Textarea } from '../../components'
import rules from './rules'

export default function () {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  const setCharAt = (string, index, char) =>
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
      <Title>Punto Switcher</Title>
      <p class={styles.text}>{t(['punto-switcher', 'note'])}</p>
      <Textarea
        placeholder={t(['punto-switcher', 'input-placeholder'])}
        aria-placeholder={t(['punto-switcher', 'input-placeholder'])}
        onInput={e => setText((e.target as HTMLInputElement).value)}
      />
      <div class={styles.responsive_container}>
        <Button
          onClick={() => setOutput(changeLayout(text()))}
        >
          {t(['punto-switcher', 'button'])}!
        </Button>
        <CopyButton copy={output()} />
      </div>
      <Textarea
        readonly
        value={output()}
        placeholder={t(['punto-switcher', 'result'])}
        aria-placeholder={t(['punto-switcher', 'result'])}
      />
    </>
  )
}