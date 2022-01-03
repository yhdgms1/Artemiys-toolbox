import { Link } from 'solid-app-router'
import { Card } from '../../components'
import { setTitle } from '../../helpers'
import { t } from '../../i18n'

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
  setTitle("Artemiy's Toolbox")
  return (
    <>
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
