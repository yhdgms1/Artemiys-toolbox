import { Title } from 'solid-meta'
import { Card } from '~/components'
import { t } from '~/i18n'

const tools = [
  'characters count',
  'repeat something n times',
  'transliteration',
  'swagify',
  'string backwards',
  'cheap sluts',
  'text case changer',
  'chat dot replacer',
  'vibrator',
  'murmur hash',
  'scule',
]

export default () => {
  return (
    <>
      <Title>Artemiy's Toolbox</Title>
      {tools.map(tool => (
        <Card
          href={'/' + tool.replace(/ /g, '-')}
          title={tool}
          description={t(['home', tool])}
        />
      ))}
    </>
  )
}
