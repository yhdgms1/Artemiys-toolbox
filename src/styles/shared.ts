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

export const text = css`
  margin: 0.4rem 0;
  font-size: 1.2rem;
  text-align: center;
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
