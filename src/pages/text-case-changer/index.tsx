import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle(t(['text-case-changer', 'title']))

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  const isUpperCase = (text: string) => text === text.toUpperCase()
  const isLowerCase = (text: string) => text === text.toLowerCase()

  /*
   * Thanks to memes for that post https://www.reddit.com/r/Python/comments/j8kpes/i_made_a_script_that_randomly_capitalizes_letters/
   */
  const randomiseCase = (text: string) => {
    let newSentence = ''
    let number = 0

    for (let letter of text.toLowerCase()) {
      if (newSentence.length < 2) {
        newSentence += Math.random() >= 0.5 ? letter : letter.toUpperCase()
      } else {
        if (
          (isUpperCase(newSentence[number - 2]) &&
            isUpperCase(newSentence[number - 1])) ||
          (isLowerCase(newSentence[number - 2]) &&
            isLowerCase(newSentence[number - 1]))
        ) {
          if (isUpperCase(newSentence[number - 1])) {
            newSentence += letter.toLowerCase()
          } else {
            newSentence += letter.toUpperCase()
          }
        } else {
          newSentence += Math.random() >= 0.5 ? letter : letter.toUpperCase()
        }
      }

      number += 1
    }

    return newSentence.replace(/I/gm, 'i').replace(/l/gm, 'L')
  }

  return (
    <>
      <h2 class={styles.heading2}>{t(['text-case-changer', 'title'])}</h2>
      <Textarea
        placeholder={t('Enter the text here')}
        onInput={e => setText(e.currentTarget.value)}
      />
      <div class={styles.responsive_container}>
        <Button onClick={() => setOutput(text().toUpperCase())}>
          {t(['text-case-changer', 'to uppercase'])}!
        </Button>
        <Button onClick={() => setOutput(text().toLowerCase())}>
          {t(['text-case-changer', 'to lowercase'])}!
        </Button>
        <Button onClick={() => setOutput(randomiseCase(text()))}>
          {t(['text-case-changer', 'randomise case'])}!
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
