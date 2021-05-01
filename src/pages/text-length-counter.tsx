import type { Component } from "solid-js";
import { createSignal, onMount } from "solid-js";
import * as styles from "./text-length-counter.styles";
import Graphemer from "graphemer";
import { text as text_style } from "../styles/text";
import { textarea } from '../styles/textarea';

export default function textLengthCounter(): Component {
  const [text, setText] = createSignal("");
  const splitter = new Graphemer();

  return (
    <>
      <p class={text_style}>Length: {splitter.countGraphemes(text())}</p>
      <p class={text_style}>
        Length without whitespaces:{" "}
        {splitter.countGraphemes(text().replaceAll(" ", ""))}
      </p>
      <textarea
        placeholder="Input your text here to count"
        class={textarea}
        spellcheck="false"
        onInput={(e) => setText(e.target.value)}
      >
      </textarea>
    </>
  );
}
