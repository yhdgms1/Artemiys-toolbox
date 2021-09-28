import * as styles from '../../styles/index.css'
import { Button } from '../../components'
import { t } from '../../i18n'
import { setTitle } from '../../helpers'

const Vibrator = (length: number) => {
  let interval!: number

  function start() {
    navigator.vibrate(length)

    interval = setInterval(() => {
      clearInterval(interval)

      start()
    }, length)
  }

  function stop() {
    clearInterval(interval)
    navigator.vibrate(0)
  }

  return {
    start,
    stop,
  }
}

export default () => {
  setTitle(t(['vibrator', 'title']))

  const vibrator = Vibrator(/* Random number */ 7490)

  return (
    <>
      <h2 class={styles.heading2}>{t(['vibrator', 'title'])}</h2>
      <Button onClick={vibrator.start}>{t(['vibrator', 'Vibrate'])}</Button>
      <Button onClick={vibrator.stop}>{t(['vibrator', 'Stop'])}</Button>
    </>
  )
}
