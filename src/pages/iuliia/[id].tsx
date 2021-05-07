import {
  big_text,
  button,
  link,
  text as text_style,
  textarea,
} from "../../styles/shared";
import { Link } from "solid-app-router";
import { createSignal, Show } from "solid-js";
import schemas from "./schemas.js";
import { translate } from "@artemis69/iuliia";

export default function Iullia(props) {
  const schema = props.params.id;

  const [text, setText] = createSignal("");
  const [output, setOutput] = createSignal("");

  return (
    <>
      <Show when={(schema in schemas)} fallback={<Error />}>
        <Link class={`${big_text} ${link}`} href="/iuliia">go back</Link>
        <p class={text_style}>Current schema is {schema}</p>
        <textarea
          class={textarea}
          spellcheck="false"
          placeholder="Type the text here"
          onInput={(e) => setText(e.target.value)}
        />
        <button
          class={button}
          onClick={() => setOutput(translate(text(), schemas[schema]))}
        >
          Transliterate!
        </button>
        <textarea
          class={textarea}
          spellcheck="false"
          readonly
          placeholder="Transliterated text will be here"
          value={output()}
        />
      </Show>
    </>
  );
}

function Error() {
  return (
    <>
      <p class={big_text}>Schema does not exists</p>
      <Link class={`${link}`} href="/iuliia">view existing</Link>
    </>
  );
}
