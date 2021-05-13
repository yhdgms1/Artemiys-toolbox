import type { Component } from "solid-js";
import * as styles from "../styles/shared";
import { Link } from "solid-app-router";

const tools = [
  {
    title: "text length counter",
    description: "Count the length of the text with and without spaces",
    link: "text-length-counter",
  },
  {
    title: "repeat something n times",
    description:
      "Repeat the string many times",
    link: "repeat-it-n-times",
  },
  {
    title: "transliteration",
    description:
      "Transliterate Cyrillic to Latin using iuliia",
    link: "iuliia",
  },
  {
    title: "punto switcher",
    description:
      "Change the keyboard layout from Russian to English and back again",
    link: "punto-switcher",
  },
  {
    title: "uwuifier",
    description: "Uwuify any sentence or word",
    link: "uwuifier",
  },
  {
    title: "swagify",
    description: "Swagify any sentence or word and then #SwagAllDay",
    link: "swagify",
  },
] as const;

export default function (): Component {
  return (
    <>
      {tools.map((tool) => (
        <Link href={`/${tool.link}`} class={styles.card}>
          <div class={styles.card__container}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
