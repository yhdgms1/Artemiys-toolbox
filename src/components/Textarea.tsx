import type { JSX } from 'solid-js'
import { css } from 'linaria';

const textarea = css`
  font-size: inherit;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  margin: 0 0 0.5em 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 100%;
  width: 90%;
  padding: 0.4rem;
  resize: vertical;
  height: clamp(25vh, 30vh, 30vh);
  @media (prefers-color-scheme: dark) {
    background: #0000;
    border-color: #3b3b3b;
    color: #eee;
    &:focus {
      outline-color: #ccc;
    }
  }
  @media screen and (max-width: 640px) {
    resize: none;
  }
`

export const Textarea = (props: JSX.TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea class={textarea} {...props} />
