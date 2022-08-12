import { Button, Heading } from '~/components'
import { t } from '~/i18n'
import { Title } from '@solidjs/meta'

const Vibrator = (length: number) => {
  let interval: number | undefined

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
  const vibrator = Vibrator(/* Random number */ 7490)

  const title = t(['vibrator', 'title'])

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Button onClick={vibrator.start}>{t(['vibrator', 'Vibrate'])}</Button>
      <Button onClick={vibrator.stop}>{t(['vibrator', 'Stop'])}</Button>
    </>
  )
}
