import { t } from '~/i18n'
import { channel } from '~/lib'
import { Textarea, Heading, Paragraph, Await } from '~/components'
import { Title } from '@solidjs/meta'

export default () => {
  const text = channel('')

  const title = t('character-count.0')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Await for={import('graphemer')}>
        {Graphemer => {
          const splitter = new Graphemer.default()
          const countGraphemes = splitter.countGraphemes

          return (
            <>
              <Paragraph>
                {t('character-count.2')}
                {countGraphemes(text())}
              </Paragraph>
              <Paragraph>
                {t('character-count.3')}
                {countGraphemes(text().replace(/ /g, ''))}
              </Paragraph>
              <Textarea
                placeholder={t('character-count.1')}
                spellcheck={false}
                onInput={e => {
                  text(e.currentTarget.value)
                }}
              />
            </>
          )
        }}
      </Await>
    </>
  )
}
