import { createSignal } from 'solid-js'
import Graphemer from 'graphemer'
import { t } from '~/i18n'
import { CopyButton, Textarea, Heading } from '~/components'
import { Title } from '@solidjs/meta'

export default () => {
  const [output, setOutput] = createSignal('')
  const splitter = new Graphemer()

  const title = t('string-backwards.0')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Textarea
        placeholder={t('global.9')}
        onInput={e =>
          setOutput(
            splitter.splitGraphemes(e.currentTarget.value).reverse().join('')
          )
        }
      />
      <CopyButton copy={output()} />
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t('string-backwards.1')}
      />
    </>
  )
}
