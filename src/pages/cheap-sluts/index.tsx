import { Link } from 'solid-app-router'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { Card } from '../../components'
import { setTitle } from '../../helpers'

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

export default () => {
  setTitle('Cheap Sluts')
  return (
    <>
      <h1 class={styles.heading2}>Cheap Sluts</h1>
      <p class={styles.text}>{t(['cheap sluts', 'Select a method'])}</p>
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
