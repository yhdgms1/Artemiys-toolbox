import { Link } from 'solid-app-router'
import { createSignal, Show, For } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Input, Icon, ArrowDown } from '../../components'
import { setTitle } from '../../helpers'
import { createHrefUrl } from './utils'

import { Disclosure, DisclosureButton, DisclosurePanel } from 'solid-headless'
import * as styles from '../../styles/index.css'
import * as componentStyles from '../../styles/components/index.css'

export default () => {
  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')

  const [width, setWidth] = createSignal(0)
  const [height, setHeight] = createSignal(0)

  const renderers = [
    'slut',
    'crime',
    'gay',
    'muslim',
    'azerbaijan',
    'mom',
    'svinoros',
  ]

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div class={clsx(styles.flex_col, styles.lonely_container)}>
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
        <Disclosure as="div" class={componentStyles.disclosure}>
          <DisclosureButton class={componentStyles.disclosureButton}>
            {({ isOpen }) => (
              <>
                {t(['cheap sluts', 'picture', 'Additional options'])}
                <Icon
                  class={clsx(
                    componentStyles.disclosureButtonIcon,
                    isOpen() && styles.rotate_180
                  )}
                >
                  <ArrowDown />
                </Icon>
              </>
            )}
          </DisclosureButton>
          <DisclosurePanel class={styles.flex_col}>
            <Input
              type="number"
              placeholder={t(['cheap sluts', 'picture', 'Picture width'])}
              spellcheck={false}
              onInput={e => setWidth(e.currentTarget.valueAsNumber)}
            >
              {t(['cheap sluts', 'picture', 'Picture width'])}
            </Input>
            <Input
              type="number"
              placeholder={t(['cheap sluts', 'picture', 'Picture height'])}
              spellcheck={false}
              onInput={e => setHeight(e.currentTarget.valueAsNumber)}
            >
              {t(['cheap sluts', 'picture', 'Picture height'])}
            </Input>
          </DisclosurePanel>
        </Disclosure>
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
        <For each={renderers}>
          {template => (
            <a
              class={clsx(styles.link, styles.margin6)}
              target="_blank"
              href={createHrefUrl(template, name(), pic(), width(), height())}
            >
              {t(['cheap sluts', 'picture', 'Create'], { template })}
            </a>
          )}
        </For>
      </Show>
    </>
  )
}
