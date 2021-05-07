import type { Component } from "solid-js";
import { swagify } from "@artemis69/swagify";
import { createSignal } from "solid-js";
import {
  button,
  responsive_container,
  text as text_style,
  textarea,
} from "../styles/shared";

export default function (): Component {
  const [copyButtonContent, setCopyButtonContent] = createSignal("Copy!");
  const [output, setOutput] = createSignal("");

  return (
    <>
      <textarea
        class={textarea}
        placeholder="Enter the text to swagify"
        onInput={(e) => setOutput(swagify(e.target.value))}
      />
      <div class={responsive_container}>
        <button
          class={button}
          onClick={() => {
            navigator.clipboard.writeText(output()).then(() => {
              setCopyButtonContent("Copied!");
              const timeout = setTimeout(() => {
                setCopyButtonContent("Copy!");
                clearTimeout(timeout);
              }, 750);
            });
          }}
        >
          {copyButtonContent()}
        </button>
      </div>
      <textarea
        readonly
        class={textarea}
        value={output()}
        placeholder="Result will be here"
      />
    </>
  );
}
