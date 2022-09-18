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

  const title = t('vibrator.0')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Button onClick={vibrator.start}>{t('vibrator.1')}</Button>
      <Button onClick={vibrator.stop}>{t('vibrator.2')}</Button>
    </>
  )
}
