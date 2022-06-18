import type { FlowComponent, JSXElement } from 'solid-js'
import clsx from 'clsx'
import { Disclosure, DisclosureButton, DisclosurePanel } from 'solid-headless'
import { Icon, ArrowDown } from '..'

import * as styles from './styles.css'

interface Props {
  buttonChildren: JSXElement
}

export const CustomDisclosure: FlowComponent<Props> = props => {
  return (
    <Disclosure as="div" class={styles.disclosure}>
      <DisclosureButton class={styles.disclosureButton}>
        {({ isOpen }) => (
          <>
            {props.buttonChildren}
            <Icon
              class={clsx(
                styles.disclosureButtonIcon,
                isOpen() && styles.disclosureOpenIcon
              )}
            >
              <ArrowDown />
            </Icon>
          </>
        )}
      </DisclosureButton>
      <DisclosurePanel class={styles.disclosurePanel}>
        {props.children}
      </DisclosurePanel>
    </Disclosure>
  )
}
