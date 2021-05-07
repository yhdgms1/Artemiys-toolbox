import type { Component } from "solid-js";
import Uwuifier from "uwuifier/dist/index.js";
import { createSignal } from "solid-js";
import * as styles from "../styles/shared";

export default function (): Component {
  const uwuifier = new Uwuifier();

  const [copyButtonContent, setCopyButtonContent] = createSignal("Copy!");
  const [output, setOutput] = createSignal("");

  return (
    <>
      <textarea
        class={styles.textarea}
        placeholder="Enter the text to uwuify"
        onInput={(e) => setOutput(uwuifier.uwuifySentence(e.target.value))}
      />
      <div class={styles.responsive_container}>
        <button
          class={styles.button}
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
        class={styles.textarea}
        value={output()}
        placeholder="Result will be here"
      />
    </>
  );
}
