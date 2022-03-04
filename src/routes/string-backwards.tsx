import { createSignal } from 'solid-js'
import Graphemer from 'graphemer'
import { t } from '~/i18n'
import { CopyButton, Textarea, Heading } from '~/components'
import { Title } from 'solid-meta'

export default () => {
  const [output, setOutput] = createSignal('')
  const splitter = new Graphemer()

  const title = t(['string-backwards', 'header'])

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Textarea
        placeholder={t('Enter the text here')}
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
        placeholder={t(['string-backwards', 'Text backwards will be here'])}
      />
    </>
  )
}
