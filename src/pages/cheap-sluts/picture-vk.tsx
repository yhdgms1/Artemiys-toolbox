import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input, Icon, ArrowDown } from '../../components'
import { setTitle } from '../../helpers'
import { createHrefUrl, apiUrl } from './utils'

import { Disclosure, DisclosureButton, DisclosurePanel } from 'solid-headless'
import * as componentStyles from '../../styles/components/index'

type ApiData = {
  error: string
  name: string
  picture: string
}

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [data, setData] = createSignal<ApiData>({
    error: '',
    name: '',
    picture: '',
  })

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

  const clickHandler = async () => {
    if (!shortname()) return

    try {
      const response = await fetch(apiUrl + 'vk/info', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ id: shortname().trim() }),
      })

      const json: ApiData = await response.json()

      setData(json)
    } catch (error) {
      setData({
        error: t(['cheap sluts', 'Unexpected Error']),
        name: '',
        picture: '',
      })
    }
  }

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div class={clsx(styles.flex_col, styles.lonely_container)}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'vk', 'id or shortname'])}
          spellcheck={false}
          onInput={e => setShortname(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'vk', 'id or shortname'])}
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
      <Button onClick={clickHandler}>
        {t(['cheap sluts', 'picture-vk', 'Find'])}
      </Button>
      {data().error !== '' && (
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {data().error}
        </p>
      )}
      {!!(data().name && data().picture) &&
        renderers.map(template => (
          <a
            class={clsx(styles.link, styles.margin6)}
            target="_blank"
            href={createHrefUrl(
              template,
              data().name,
              data().picture,
              width(),
              height()
            )}
          >
            {t(['cheap sluts', 'picture', 'Create'], { template })}
          </a>
        ))}
    </>
  )
}
