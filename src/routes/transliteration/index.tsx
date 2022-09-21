import { t } from '~/i18n'
import { Card, Heading, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'

import * as styles from '~/styles/index.css'

const schemes: [string, string][] = [
  ['mosmetro', 'Moscow Metro map'],
  ['wikipedia', 'Wikipedia'],
  ['yandex_maps', 'Yandex.Maps'],
  ['yandex_money', 'Yandex.Money'],
  ['telegram', 'Telegram'],
  ['scientific', 'Scientific'],
  ['gost_7034', 'GOST R 7.0.34-2014'],
  ['bs_2979', 'British Standard 2979:1958'],
  ['bs_2979_alt', 'British Standard 2979:1958'],
  ['gost_779', 'GOST 7.79-2000 (aka ISO 9:1995)'],
  ['gost_779_alt', 'GOST 7.79-2000 (aka ISO 9:1995)'],
  ['bgn_pcgn', 'BGN/PCGN'],
  ['bgn_pcgn_alt', 'BGN/PCGN'],
  ['gost_16876', 'GOST 16876-71 (aka GOST 1983)'],
  ['gost_16876_alt', 'GOST 16876-71 (aka GOST 1983)'],
  ['gost_52290', 'GOST R 52290-2004'],
  ['gost_52535', 'GOST R 52535.1-2006'],
  ['icao_doc_9303', 'ICAO DOC 9303'],
  ['iso_9_1954', 'ISO/R 9:1954'],
  ['iso_9_1968', 'ISO/R 9:1968'],
  ['iso_9_1968_alt', 'ISO/R 9:1968'],
  ['mvd_310', 'MVD 310-1997'],
  ['mvd_310_fr', 'MVD 310-1997'],
  ['mvd_782', 'MVD 782-2000'],
  ['ungegn_1987', 'UNGEGN 1987 V/18'],
  ['ala_lc', 'ALA-LC'],
  ['ala_lc_alt', 'ALA-LC'],
]

export default () => {
  const title = t('transliteration.2')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Paragraph>{t('transliteration.0')}</Paragraph>
      <div class={styles.main}>
        {schemes.map(scheme => (
          <Card
            href={'/transliteration/' + scheme[0]}
            title={scheme[0]}
            description={t('transliteration.1', { name: scheme[1] })}
          />
        ))}
      </div>
    </>
  )
}
