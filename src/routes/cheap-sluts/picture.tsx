import { createSignal, Show, For } from 'solid-js'
import { t } from '~/i18n'
import {
  Input,
  Disclosure,
  Container,
  Link,
  Paragraph,
  Checkbox,
  Select,
} from '~/components'
import { Title } from '@solidjs/meta'

import { cs, cdashs } from '~/lib/constants'
import { createHrefUrl, templates } from '~/lib/cs/utils'

export default () => {
  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')

  const [template, setTemplate] = createSignal(templates[0])

  const [useSvg, setUseSvg] = createSignal(false)

  const [width, setWidth] = createSignal(0)
  const [height, setHeight] = createSignal(0)

  const i18nKey = cs

  return (
    <>
      <Title>Picture</Title>
      <Link href={'/' + cdashs}>{t('global.11')}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t('cs.8.0')}
          spellcheck={false}
          onInput={e => setName(e.currentTarget.value)}
        >
          {t('cs.8.0')}
        </Input>
        <Input
          type="text"
          placeholder={t('cs.8.1')}
          spellcheck={false}
          onInput={e => setPic(e.currentTarget.value)}
        >
          {t('cs.8.1')}
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
      <Show
        when={name() !== '' && pic() !== ''}
        fallback={<Paragraph>{t('cs.10.1')}</Paragraph>}
      >
        <Link
          small={true}
          margin={true}
          target="_blank"
          href={createHrefUrl({
            template: template(),
            name: name(),
            picture: pic(),
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
