import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import {
  button,
  responsive_container,
  text as text_style,
  textarea,
} from "../styles/shared";

const rules = {
  "~": "Ё",
  "`": "ё",
  "@": '"',
  "#": "№",
  "q": "й",
  "w": "ц",
  "e": "у",
  "r": "к",
  "t": "е",
  "y": "н",
  "u": "г",
  "i": "ш",
  "o": "щ",
  "p": "з",
  "a": "ф",
  "s": "ы",
  "d": "в",
  "f": "а",
  "g": "п",
  "h": "р",
  "j": "о",
  "k": "л",
  "l": "д",
  "z": "я",
  "x": "ч",
  "c": "с",
  "v": "м",
  "b": "и",
  "n": "т",
  "m": "ь",
  "Q": "Й",
  "W": "Ц",
  "E": "У",
  "R": "К",
  "T": "Е",
  "Y": "Н",
  "U": "Г",
  "I": "Ш",
  "O": "Щ",
  "P": "З",
  "A": "Ф",
  "S": "Ы",
  "D": "В",
  "F": "А",
  "G": "П",
  "H": "Р",
  "J": "О",
  "K": "Л",
  "L": "Д",
  "Z": "Я",
  "X": "Ч",
  "C": "С",
  "V": "М",
  "B": "И",
  "N": "Т",
  "M": "Ь",
  "[": "х",
  "{": "Х",
  "]": "ъ",
  "}": "Ъ",
  ";": "ж",
  ":": "Ж",
  "'": "э",
  '"': "@",
  ",": "б",
  "<": "Б",
  ".": "ю",
  ">": "Ю",
  "&": "?",
  "/": ".",
  "Ё": "~",
  "ё": "`",
  "№": "#",
  "й": "q",
  "ц": "w",
  "у": "e",
  "к": "r",
  "е": "t",
  "н": "y",
  "г": "u",
  "ш": "i",
  "щ": "o",
  "з": "p",
  "ф": "a",
  "ы": "s",
  "в": "d",
  "а": "f",
  "п": "g",
  "р": "h",
  "о": "j",
  "л": "k",
  "д": "l",
  "я": "z",
  "ч": "x",
  "с": "c",
  "м": "v",
  "и": "b",
  "т": "n",
  "ь": "m",
  "Й": "Q",
  "Ц": "W",
  "У": "E",
  "К": "R",
  "Е": "T",
  "Н": "Y",
  "Г": "U",
  "Ш": "I",
  "Щ": "O",
  "З": "P",
  "Ф": "A",
  "Ы": "S",
  "В": "D",
  "А": "F",
  "П": "G",
  "Р": "H",
  "О": "J",
  "Л": "K",
  "Д": "L",
  "Я": "Z",
  "Ч": "X",
  "С": "C",
  "М": "V",
  "И": "B",
  "Т": "N",
  "Ь": "M",
  "х": "[",
  "Х": "{",
  "ъ": "]",
  "Ъ": "}",
  "ж": ";",
  "Ж": ":",
  "э": "'",
  "Э": '"',
  "б": ",",
  "Б": "<",
  "ю": ".",
  "Ю": ">",
  "?": "&",
};

export default function (): Component {
  const [text, setText] = createSignal("");
  const [copyButtonContent, setCopyButtonContent] = createSignal("Copy!");
  const [output, setOutput] = createSignal("");

  const setCharAt = (string, index, char) =>
    index > string.length - 1
      ? string
      : string.substr(0, index) + char + string.substr(index + 1);

  const changeLayout = (string: string): string => {
    if (string.length > 0) {
      for (let i = 0; i < string.length; i++) {
        const key = string.charAt(i);

        if (rules.hasOwnProperty(key)) {
          string = setCharAt(string, i, rules[key]);
        }
      }
    }

    return string;
  };

  return (
    <>
      <p class={text_style}>Note: Contains bugs</p>
      <textarea
        class={textarea}
        placeholder="Enter the text you want to change the layout of"
        aria-placeholder="Enter the text you want to change the layout of"
        onInput={(e) => setText(e.target.value)}
      />
      <div class={responsive_container}>
        <button
          type="button"
          class={button}
          onClick={() => setOutput(changeLayout(text()))}
        >
          Change layout
        </button>
        <button
          type="button"
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
        aria-placeholder="Result will be here"
      />
    </>
  );
}
