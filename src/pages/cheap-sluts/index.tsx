import { Link } from 'solid-app-router'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { Card } from '../../components'
import { setTitle } from '../../helpers'

interface IMethod {
  readonly title: string
  readonly description: string
  readonly link: string
}

const methods: IMethod[] = [
  {
    title: 'using vk',
    description: "Automatically using a friend's VKontakte profile",
    link: 'using-vk',
  },
  {
    title: 'manually',
    description: 'manually fill in all the required fields',
    link: 'manually',
  },
  {
    title: 'remove',
    description: 'removes the person from the site',
    link: 'remove'
  }
]

export default () => {
  setTitle('Cheap Sluts')
  return (
    <>
      <h1 class={styles.big_text}>Cheap Sluts</h1>
      <p class={styles.text}>{t(['cheap sluts', 'Select a method'])}</p>
      <div class={styles.main}>
        {methods.map(method => (
          <Card
            href={'/cheap-sluts/' + method.link}
            title={method.title}
            description={method.description}
          />
        ))}
      </div>
    </>
  )
}
