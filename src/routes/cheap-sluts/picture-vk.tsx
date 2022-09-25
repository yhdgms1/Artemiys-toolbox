import { createSignal, Show, For } from 'solid-js'
import { t } from '~/i18n'
import {
  Button,
  Input,
  Disclosure,
  Container,
  Link,
  Paragraph,
  Checkbox,
  Select,
} from '~/components'
import { Title } from '@solidjs/meta'

import { cdashs } from '~/lib/constants'
import { createHrefUrl, templates } from '~/lib/cs/utils'
import { request } from '~/lib/cs/api'

type ApiData = {
  error?: string
  name?: string
  picture?: string
}

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [data, setData] = createSignal<ApiData>({})

  const [template, setTemplate] = createSignal(templates[0])

  const [useSvg, setUseSvg] = createSignal(false)

  const [width, setWidth] = createSignal(0)
  const [height, setHeight] = createSignal(0)

  const clickHandler = async () => {
    if (!shortname()) return

    try {
      const json = await request('get_vk_info', shortname())

      setData(json)
    } catch (error) {
      setData({
        error: t('cs.5'),
      })
    }
  }

  return (
    <>
      <Title>Picture VK</Title>
      <Link href={'/' + cdashs}>{t('global.11')}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t('cs.7.0')}
          spellcheck={false}
          onInput={e => setShortname(e.currentTarget.value.trim())}
        >
          {t('cs.7.0')}
        </Input>
        <Select
          title={t('cs.6')}
          onChange={e => setTemplate(e.currentTarget.value)}
        >
          <For each={templates}>
            {tmpl => (
              <option value={tmpl} selected={template() === tmpl}>
                {tmpl.charAt(0).toUpperCase() + tmpl.slice(1)}
              </option>
            )}
          </For>
        </Select>
        <Disclosure buttonChildren={t('cs.10.2')}>
          <Input
            type="number"
            placeholder={t('cs.10.3')}
            spellcheck={false}
            onInput={e => setWidth(e.currentTarget.valueAsNumber)}
          >
            {t('cs.10.3')}
          </Input>
          <Input
            type="number"
            placeholder={t('cs.10.4')}
            spellcheck={false}
            onInput={e => setHeight(e.currentTarget.valueAsNumber)}
          >
            {t('cs.10.4')}
          </Input>
          <Checkbox
            checked={useSvg()}
            onChange={e => setUseSvg(e.currentTarget.checked)}
          >
            {t('cs.10.5')}
          </Checkbox>
        </Disclosure>
      </Container>
      <Button onClick={clickHandler}>{t('cs.11.0')}</Button>
      <Show when={'error' in data()}>
        <Paragraph>
          {t('cs.3')}: {data().error}
        </Paragraph>
      </Show>
      <Show when={'name' in data() && 'picture' in data()}>
        <Link
          small={true}
          margin={true}
          target="_blank"
          href={createHrefUrl({
            template: template(),
            name: data().name!,
            picture: data().picture!,
            width: width(),
            height: height(),
            format: useSvg() ? 'svg' : undefined,
          })}
        >
          {t('cs.10.0', { template: template() })}
        </Link>
      </Show>
    </>
  )
}
