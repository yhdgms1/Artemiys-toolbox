import * as styles from '~/styles/index.css'
import { t } from '~/i18n'
import { Card, Heading, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'

import { cs, cdashs } from '~/lib/constants'

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

const title = cs

export default () => {
  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Paragraph>{t([cs, 'Select a method'])}</Paragraph>
      <div class={styles.main}>
        {methods.map(method => (
          <Card
            href={'/' + cdashs + '/' + method.link}
            title={method.title}
            description={t([cs, 'home', method.title])}
          />
        ))}
      </div>
    </>
  )
}
