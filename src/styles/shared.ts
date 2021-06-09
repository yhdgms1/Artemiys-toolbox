import { css } from 'linaria'

export const main = css`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const main_layout = css`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const button = css`
  margin: 1.124rem;
  height: 2.7rem;
  width: 13rem;
  font-size: 16px;
  border-radius: 7px;
  cursor: pointer;
  transition: all .3s;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  border: 1px solid #0000002e;
  background: #f2f2f2;
  color: #323130;
  &:hover{
    box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
  }
  @media (prefers-color-scheme: dark){
    box-shadow: 0 5px 10px 0 rgb(58 59 66 / 37%);
    border: 1px solid #ffffff2e;
    background: #252525;
    color: #d5ded7;
    &:hover{
      box-shadow: 0 1px 4px 0 rgb(58 59 66 / 37%);
    }
  }
  @media screen and (max-width: 640px) {
    display: block;
  }
`

export const text = css`
  margin: 0.4rem 0;
  font-size: 1.2rem;
`

export const big_text = css`
  font-size: 1.7rem;
  font-weight: normal;
  padding: 0 0.7rem;
  text-align: center;
`

export const link = css`
  color: unset;
  &:hover {
    text-decoration-style: dotted;
  }
`

export const card__container = css`
  padding: 1.25rem 1rem;
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 0.125rem;
  & > h3 {
    font-weight: 500;
    font-size: larger;
    color: #000;
  }
  & > p {
    color: #000;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    opacity: 0;
    background: #ff7aa2;
    transition: opacity 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`

export const card = css`
  transition: background 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    border cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
  padding: 0.3em;
  border-radius: 0.25rem;
  border: 1px solid #ececec;
  background: #fff;
  text-decoration: none;
  position: relative;
  &:hover, &:focus {
    border-color: #ffc2d4;
    background: #ffe0e9;
  }
  &:active {
    border-color: #ff9ebb;
    background: #ffc2d4;
    & > .${card__container}::after {
      opacity: 0.2;
    }
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 1rem;
    width: 100%;
  }
  @media (prefers-color-scheme: dark) {
    background: #171717;
    border-color: #333;
    & > .${card__container} {
      background: #171717;
      & > h3 {
        color: #eee;
      }
      & > p {
        color: #eee;
      }
    }
    &:hover, &:focus {
      border-color: #e69ab0;
      background: #ff9ebb;
      outline: transparent;
    }
    &:active {
      background: #fd8aac;
    }
  }
`

export const textarea = css`
  font-size: inherit;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  margin: 0 0 0.5em 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 6px;
  @media (prefers-color-scheme: dark) {
    background: #0000;
    border-color: #3b3b3b;
    color: #eee;
    &:focus {
      outline-color: #ccc;
    }
  }
  max-width: 100%;
  width: 90%;
  padding: 0.4rem;
  resize: vertical;
  height: clamp(25vh, 30vh, 30vh);
`

export const responsive_container = css`
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
`

export const input = css`
  margin: 0 0 0.5em 0;
  box-sizing: border-box;
  border: unset;
  background: unset;
  border-radius: 6px;
  padding: 0.25rem;
  @media (prefers-color-scheme: dark) {
    color: #eee;
    &:focus {
      outline-color: #ccc;
    }
  }
  @media screen and (max-width: 640px) {
    text-align: center;
    &::-webkit-input-placeholder {
      text-align: center;
    }

    &::-moz-placeholder {
      text-align: center;
    }

    &:-ms-input-placeholder {
      text-align: center;
    }
  }
`

export const width_70 = css`
  width: 70vw;
`

export const row = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const four_x_four_grid_layout = css`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const heading = css`
  margin-block-start: 1em;
  margin-block-end: 1em;
  font-weight: 400;
  font-variation-settings: 'wght' 400;
`

export const btn_as_link = css`
  border: none;
  border-bottom: 1px dashed;
  background: transparent;
  color: #f67288;
  margin: 0 0.4em;
  cursor: pointer;
  &.active {
    color: #000;
    cursor: initial;
    border-bottom: none;
    @media (prefers-color-scheme: dark) {
      color: #eee;
    }
  }
`

export const padding_bottom_sm = css`
  padding-bottom: 0.7rem;
`
export const copy_btn = css`
  cursor: copy;
`
