import type { VoidComponent } from 'solid-js'
import type { Location } from '@solidjs/router'

import { A } from '@solidjs/router'
import { Settings } from '..'
import { Header as BasicHeader } from 'disgraceful-ui'

import * as styles from '~/styles/app.css'

interface Props {
  location: Location<unknown>
}

export const Header: VoidComponent<Props> = props => {
  return (
    <BasicHeader>
      <h1>
        <A
          href="/"
          class={styles.title}
          classList={{
            [styles.no_underline]: props.location.pathname === '/',
          }}
        >
          Artemiy's Toolbox
        </A>
      </h1>
      <Settings />
    </BasicHeader>
  )
}
