import type { JSX } from 'solid-js'
import { css } from 'linaria';
import clsx from 'clsx'

const button = css`
  margin: 1.124rem;
  height: 2.7rem;
  width: 13rem;
  font-size: 16px;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  border: 1px solid #1111112d;
  background: #f2f2f2;
  color: #323130;
  &:hover {
    box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%),
      0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: 0 5px 10px 0 rgb(58 59 66 / 37%);
    border: 1px solid #ffffff2e;
    background: #252525;
    color: #d5ded7;
    &:hover {
      box-shadow: 0 1px 4px 0 rgb(58 59 66 / 37%);
    }
  }
  @media screen and (max-width: 640px) {
    display: block;
  }
`

export const Button = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => <button type="button" {...props} class={clsx(button, props.class)}>{props.children}</button>