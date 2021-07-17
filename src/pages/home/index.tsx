import { Link } from 'solid-app-router'
import { Card } from '../../components'
import { setTitle } from '../../helpers'

interface ITools {
  readonly title: string
  readonly description: string
  readonly link: string
}

const tools: ITools[] = [
  {
    title: 'characters count',
    description: 'Counts the number of characters in the text, including emoji',
    link: 'characters-count',
  },
  {
    title: 'repeat something n times',
    description: 'Repeat the string many times',
    link: 'repeat-it-n-times',
  },
  {
    title: 'transliteration',
    description: 'Transliterate Cyrillic to Latin',
    link: 'transliteration',
  },
  {
    title: 'punto switcher',
    description:
      'Change the keyboard layout from Russian to English and back again',
    link: 'punto-switcher',
  },
  {
    title: 'uwuifier',
    description: 'UwUify any sentence or word',
    link: 'uwuifier',
  },
  {
    title: 'swagify',
    description: 'Swagify any sentence or word',
    link: 'swagify',
  },
  {
    title: 'string backwards',
    description: 'Turning text backwards',
    link: 'string-backwards',
  },
  {
    title: 'aspect ratio calculator',
    description: 'Use to check the dimensions when resizing images',
    link: 'aspect-ratio-calculator',
  },
  {
    title: 'cheap sluts',
    description: 'Humiliate a friend by showing they on a fake hooker site',
    link: 'cheap-sluts',
  },
  {
    title: 'text case changer',
    description: 'text CASE chAnGeR',
    link: 'text-case-changer',
  },
]

export default () => {
  setTitle("Artemiy's Toolbox")
  return (
    <>
      {tools.map(tool => (
        <Card
          href={'/' + tool.link}
          title={tool.title}
          description={tool.description}
        />
      ))}
    </>
  )
}
