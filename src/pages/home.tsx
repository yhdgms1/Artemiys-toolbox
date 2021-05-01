import * as card from "../styles/card";
import { Link } from "solid-app-router";
import type { Component } from "solid-js";

const tools = [
  {
    title: "text length counter",
    description:
      "Count the length of the text with and without spaces. Text length for javascript or human",
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
      "Transliteration of text from russian into english using iuliia with multiple standards",
    link: "iuliia",
  },
] as const;

export default function Home(): Component {
  return (
    <>
      {tools.map((tool) => (
        <Link href={`/${tool.link}`} class={card.card}>
          <div class={card.card__container}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
          </div>
          <div class={card.card__active} />
        </Link>
      ))}
    </>
  );
}
