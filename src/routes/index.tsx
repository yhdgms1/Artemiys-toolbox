import { Title } from '@solidjs/meta'
import { Card } from '~/components'
import { t } from '~/i18n'
import { cs } from '~/lib/constants'
import { For } from 'solid-js'

const tools = [
  'characters count',
  'repeat something n times',
  'transliteration',
  'swagify',
  'string backwards',
  null, // cs,
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
      <For each={tools}>
        {(tool, i) => tool && (
          <Card
            href={'/' + tool.replace(/ /g, '-')}
            title={tool}
            description={t('global.home.' + i().toString())}
          />
        )}
      </For>
    </>
  )
}
