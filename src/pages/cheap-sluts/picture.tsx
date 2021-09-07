import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Input } from '../../components'
import { setTitle } from '../../helpers'

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
      <Show
        when={name() !== '' && pic() !== ''}
        fallback={
          <p class={styles.margin6}>
            {t([
              'cheap sluts',
              'picture',
              'Fill in the fields above to begin creating a picture',
            ])}
          </p>
        }
      >
        {['slut', 'crime', 'gay', 'muslim', 'azerbaijan'].map(v => (
          <a
            class={clsx(styles.link, styles.margin6)}
            target="_blank"
            href={`https://cheap-sluts.pages.dev/${v}?name=${encodeURIComponent(
              name()
            )}&picture=${encodeURIComponent(pic())}&download=true&width=${
              v === 'gay' || v === 'azerbaijan' ? 1920 : 411
            }&height=${v === 'gay' || v === 'azerbaijan' ? 1080 : 823}`}
          >
            {t(['cheap sluts', 'picture', 'Create'], { template: v })}
          </a>
        ))}
      </Show>
    </>
  )
}
