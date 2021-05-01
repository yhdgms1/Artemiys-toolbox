import type { Component } from "solid-js";
import { For } from "solid-js";
import { Link } from "solid-app-router";
import * as card from "../../styles/card";
import { big_text, text as text_style } from "../../styles/text";
import { main } from '../../styles/shared';

const names = [
    "mosmetro",
    "wikipedia",
    "yandex_maps",
    "yandex_money",
    "telegram",
    "scientific",
    "ala_lc",
    "ala_lc_alt",
    "bgn_pcgn",
    "bgn_pcgn_alt",
    "bs_2979",
    "bs_2979_alt",
    "gost_16876",
    "gost_16876_alt",
    "gost_52290",
    "gost_52535",
    "gost_7034",
    "gost_779",
    "gost_779_alt",
    "icao_doc_9303",
    "iso_9_1954",
    "iso_9_1968",
    "iso_9_1968_alt",
    "mvd_310",
    "mvd_310_fr",
    "mvd_782",
    "ungegn_1987"
];

const descriptions = [
    "The most visually pleasing, though inferior to Wikipedia in phonetics",
    "Thoughtful, sounds good, and looks good. The unfortunate Щ and the controversial Ё",
    "Yandex rules for addresses. Slightly improved version of Yandex money",
    "Yandex rules for bank cards. Simple and convenient",
    "Ministry of Communications rules for international telegrams",
    "It is used in scientific works. ГОСТ 16876-71 grew out of it. Old and ugly",
    "Used by the American Library of Congress",
    "Used by the American Library of Congress",
    "The UN standard",
    "The UN standard",
    "British Library transliteration scheme. Used by Oxford University Press",
    "British Library transliteration scheme. Used by Oxford University Press",
    "Old and ugly. Replaced by ГОСТ 7.79-2000",
    "Old and ugly. Replaced by ГОСТ 7.79-2000",
    "Standard for road signs",
    "In the 2000s it was used by the ФМС for passports. Replaced by ICAO DOC 9303",
    "",
    "",
    "",
    "International standard for names. Used for driver's licenses and passports. Without diacritics",
    "An ancient international standard. Disgusting. Replaced by ISO/R 9:1968, then by ISO 9:1995",
    "An ancient international standard. Maximally disgusting. Replaced by ISO 9:1995",
    "An ancient international standard. Maximally disgusting. Replaced by ISO 9:1995",
    "Used for passports in the 1990s and 2000s. Poorly formalized. Replaced by ICAO DOC 9303",
    "There is a \"French\" version without apostrophes",
    "In the 2000s it was used for driver's licenses. Not bad, with single apostrophes. Replaced by ICAO DOC 9303",
    "UN Standard. Based on ГОСТ 16876-71"
];

export default function IulliaOnline(): Component {
  return (
    <>
      <p class={big_text}>Iuliia</p>
      <p class={text_style}>Select transliteration standard</p>
      <div class={main}>
        <For each={names} fallback={<div>Loading...</div>}>
          {(item, index) => (
            <Link href={`/iuliia/${item}`} class={card.card}>
              <div class={card.card__container}>
                <h3>{item}</h3>
                {descriptions[index()] !== '' && (
                  <p>{descriptions[index()]}</p>
                )}
              </div>
              <div class={card.card__active} />
            </Link>
          )}
        </For>
      </div>
    </>
  );
}
