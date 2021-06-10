import { Link } from 'solid-app-router'
import { css } from 'linaria'

const title = css`
  font-weight: 500;
  font-variation-settings: 'wght' 500;
  font-size: larger;
  color: #000;
  @media (prefers-color-scheme: dark) {
    color: #eee;
  }
`

const description = css`
  color: #000;
  @media (prefers-color-scheme: dark) {
    color: #eee;
  }
`

const card__container = css`
  padding: 1.25rem 1rem;
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 0.125rem;
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

const card = css`
  transition: background 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    border cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
  padding: 0.3em;
  border-radius: 0.25rem;
  border: 1px solid #ececec;
  background: #fff;
  text-decoration: none;
  position: relative;
  &:hover,
  &:focus {
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
    }
    &:hover,
    &:focus {
      border-color: #e69ab0;
      background: #ff9ebb;
      outline: transparent;
    }
    &:active {
      background: #fd8aac;
    }
  }
`

interface Props {
  title: string
  description: string
  href: string
}

export const Card = (props: Props) => (
  <Link href={props.href} class={card}>
    <div class={card__container}>
      <h2 class={title}>{props.title}</h2>
      <p class={description}>{props.description}</p>
    </div>
  </Link>
)
