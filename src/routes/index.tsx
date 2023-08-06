import { Title } from '@solidjs/meta'
import { Card } from '~/components'
import { t } from '~/i18n'
import { cs } from '~/lib/constants'

const tools = [
  'characters count',
  'repeat something n times',
  'transliteration',
  'swagify',
  'string backwards',
  // cs,
  'text case changer',
  'chat dot replacer',
  'vibrator',
  'murmur hash',
  'scule',
  'excel',
]

export default () => {
  return (
    <>
      <Title>Artemiy's Toolbox</Title>
      {tools.map((tool, i) => (
        <Card
          href={'/' + tool.replace(/ /g, '-')}
          title={tool}
          description={t('global.home.' + i.toString())}
        />
      ))}
    </>
  )
}
