import type { JSX } from 'solid-js'
import { css } from 'linaria'

const textarea = css`
  font-size: inherit;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  margin-bottom: 0.5em;
  padding: 0.4rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
  resize: vertical;
  overflow-x: hidden;
  min-height: 25vh;
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

export const Textarea = (
  props: JSX.TextareaHTMLAttributes<HTMLTextAreaElement>
) => <textarea class={textarea} {...props} />
