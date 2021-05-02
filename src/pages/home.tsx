import { card, card__container, card__active } from "../styles/shared";
import { Link } from "solid-app-router";
import type { Component } from "solid-js";

const tools = [
  {
    title: "text length counter",
    description:
      "Count the length of the text with and without spaces",
    link: "text-length-counter",
  },
  {
    title: "repeat something n times",
    description:
      "Repeat the string many times. You decide what to repeat and how many times",
    link: "repeat-it-n-times",
  },
  {
    title: "transliteration",
    description:
      "Transliterate Cyrillic to Latin using iuliia in every possible way",
    link: "iuliia",
  },
  {
    title: "cheap sluts",
    description:
      "Humiliate a fiend by showing his profile on a fake hooker site",
    link: "cheap-sluts",
  },
] as const;

export default function Home(): Component {
  return (
    <>
      {tools.map((tool) => (
        <Link href={`/${tool.link}`} class={card}>
          <div class={card__container}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
