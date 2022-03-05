import * as styles from '~/styles/index.css'
import { t } from '~/i18n'
import { Card, Heading, Paragraph } from '~/components'
import { Title } from 'solid-meta'

interface IMethod {
  readonly title: string
  readonly link: string
}

const methods: IMethod[] = [
  {
    title: 'using vk',
    link: 'using-vk',
  },
  {
    title: 'manually',
    link: 'manually',
  },
  {
    title: 'remove',
    link: 'remove',
  },
  {
    title: 'picture',
    link: 'picture',
  },
  {
    title: 'picture vk',
    link: 'picture-vk',
  },
]

const title = 'Cheap Sluts'

export default () => {
  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Paragraph>{t(['cheap sluts', 'Select a method'])}</Paragraph>
      <div class={styles.main}>
        {methods.map(method => (
          <Card
            href={'/cheap-sluts/' + method.link}
            title={method.title}
            description={t(['cheap sluts', 'home', method.title])}
          />
        ))}
      </div>
    </>
  )
}
