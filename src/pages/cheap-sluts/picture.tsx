import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Input } from '../../components'
import { setTitle } from '../../helpers'
import { createHrefUrl } from './utils'

export default () => {
  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div class={styles.flex_col}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'manually', 'Name'])}
          spellcheck={false}
          onInput={e => setName(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'manually', 'Name'])}
        </Input>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'manually', 'Picture'])}
          spellcheck={false}
          onInput={e => setPic(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'manually', 'Picture'])}
        </Input>
        {/* //todo add image width and height */}
      </div>
      {name() !== '' && pic() !== '' ? (
        ['slut', 'crime', 'gay', 'muslim', 'azerbaijan'].map(template => (
          <a
            class={clsx(styles.link, styles.margin6)}
            target="_blank"
            href={createHrefUrl(template, name(), pic())}
          >
            {t(['cheap sluts', 'picture', 'Create'], { template })}
          </a>
        ))
      ) : (
        <p class={styles.margin6}>
          {t([
            'cheap sluts',
            'picture',
            'Fill in the fields above to begin creating a picture',
          ])}
        </p>
      )}
    </>
  )
}
