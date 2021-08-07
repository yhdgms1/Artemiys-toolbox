import { Link } from 'solid-app-router'
import { Card } from '../../components'
import { setTitle } from '../../helpers'
import { t } from '../../i18n'

interface ITools {
  readonly title: string
  readonly link: string
}

const tools: ITools[] = [
  {
    title: 'characters count',
    link: 'characters-count',
  },
  {
    title: 'repeat something n times',
    link: 'repeat-it-n-times',
  },
  {
    title: 'transliteration',
    link: 'transliteration',
  },
  {
    title: 'punto switcher',
    link: 'punto-switcher',
  },
  {
    title: 'swagify',
    link: 'swagify',
  },
  {
    title: 'string backwards',
    link: 'string-backwards',
  },
  {
    title: 'aspect ratio calculator',
    link: 'aspect-ratio-calculator',
  },
  {
    title: 'cheap sluts',
    link: 'cheap-sluts',
  },
  {
    title: 'text case changer',
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
          description={t(['home', tool.title])}
        />
      ))}
    </>
  )
}
