import { Button, Heading } from '~/components'
import { t } from '~/i18n'
import { Title } from '@solidjs/meta'

const Vibrator = (length = 7490) => {
  let interval: number | undefined

  function start() {
    navigator.vibrate(length)

    interval = setInterval(() => {
      navigator.vibrate(length)
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
  const vibrator = Vibrator()
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
