import { createSignal } from 'solid-js'
import { t } from '~/i18n'
import { CopyButton, Textarea, Heading, Await } from '~/components'
import { Title } from '@solidjs/meta'

export default () => {
  const [output, setOutput] = createSignal('')

  const title = t('string-backwards.0')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Await for={import('graphemer')}>
        {Graphemer => {
          const splitter = new Graphemer.default()
          const splitGraphemes = splitter.splitGraphemes

          return (
            <>
              <Textarea
                placeholder={t('global.9')}
                onInput={e =>
                  setOutput(
                    splitGraphemes(e.currentTarget.value).reverse().join('')
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
        }}
      </Await>
    </>
  )
}
