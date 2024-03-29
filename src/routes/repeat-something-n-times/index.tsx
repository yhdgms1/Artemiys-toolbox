import { createUniqueId } from 'solid-js'
import { input } from './style.css'
import { t } from '~/i18n'
import { CopyButton, Textarea, Button, Container, Heading } from '~/components'
import { Title } from '@solidjs/meta'
import { channel } from '~/lib'

export default () => {
  const text = channel('')
  const count = channel(0)
  const output = channel('')

  const title = t('repeat-something-n-times.0')

  const repeatInput = createUniqueId()
  const timesInput = createUniqueId()

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Container text={true} responsive={true}>
        <label for={repeatInput}>{t('repeat-something-n-times.1')}</label>
        <input
          id={repeatInput}
          type="text"
          placeholder={t('repeat-something-n-times.2')}
          class={input}
          onInput={e => text(e.currentTarget.value)}
          spellcheck={false}
        />
        <input
          type="number"
          placeholder={t('repeat-something-n-times.3')}
          class={input}
          onInput={e => {
            count(e.currentTarget.valueAsNumber)
          }}
          min="1"
          max="5368708"
          id={timesInput}
        />
        <label for={timesInput}>{t('repeat-something-n-times.4')}</label>
      </Container>
      <Container responsive={true}>
        <Button
          onClick={() =>
            count() <= 5368708
              ? output(text().repeat(count()))
              : alert('The number is too high')
          }
        >
          {t('repeat-something-n-times.1')}!
        </Button>
        <CopyButton copy={output()} />
      </Container>
      <Textarea readOnly={true} value={output()} placeholder={t('global.10')} />
    </>
  )
}
