import { css } from "linaria";

export const main = css`
    padding: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 1rem;
   	row-gap: 1rem;
    @media screen and (max-width: 768px){
		grid-template-columns: repeat(2, 1fr);
	}
    @media screen and (max-width: 640px){
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
`;

export const main_layout = css`
	padding: 1rem;
	min-height: calc(100vh - 1.92307692rem);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const button = css`
    font-size: 16px;
    padding: 0.8rem 2.4rem;
    margin: 1.124rem;
    border-radius: 4px;
    color: #000;
    border: 2px solid transparent;
    background: #FF7AA2;
    cursor: pointer;
    transition: all 200ms ease;
    &[disabled]{
        color: #333;
    }
    &[disabled]:hover{
        background: #ffa6c1;
    }
    &:hover{
        border: 2px solid #FFC2D4;
        background: #ff93b3;
    }
    &:active{
        border: 2px solid #FFE0E9;
        background: #FF7AA2;
        box-shadow: 0 0 2px #ffe8ef;
    }  
    @media (prefers-color-scheme: dark) {
        color: #eee;
        background: #121212;
        &[disabled]{
            color: #ddd;
        }
        &[disabled]:hover{
            background: #141414;
        }
        &:hover {
            border: 2px solid #121212;
            background: #161616;
        }
        &:active {
            border: 2px solid #161616;
            background: #121212;
            box-shadow: 0 0 2px #080808;
        }
    }
`;

export const text = css`
    margin: 0.4rem 0;
    font-size: 1.2rem;
`;

export const big_text = css`
    font-size: 1.7rem;
`;

export const link = css`
    color: unset;
    &:hover{
        text-decoration-style: dotted;
    }
`;

export const card__active = css`
    position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;
	opacity: 0;
	background: #ff7aa2;
	transition: opacity 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const card__container = css`
    padding: 1.25rem 1rem;
	height: 100%;
	width: 100%;
	background: #fff;
	border-radius: 0.125rem;
    & > h3{
        font-weight: 500;
	    font-size: larger;
	    color: #000;
    }
    & > p{
        color: #000;
    }
`;

export const card = css`
	transition: background 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95), border cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
	padding: 0.3em;
	border-radius: 0.25rem;
	border: 1px solid #ececec;
	background: #fff;
	text-decoration: none;
	position: relative;
    &:hover {
        border-color: #ffc2d4;
        background: #ffe0e9;
    }
    &:active {
        border-color: #ff9ebb;
        background: #ffc2d4;
        & > .${card__active}{
            opacity: 0.2;
        }
    }
    @media screen and (max-width: 640px) {
		margin-bottom: 1rem;
        width: 100%;
    }
    @media (prefers-color-scheme: dark) {
        background: #161616;
        border-color: #333;
        & > .${card__container}{
            background: #161616;
            & > h3{
                color: #eee;
            }
            & > p{
                color: #eee;
            }
        }
        &:hover{
            border-color: #e69ab0;
		    background: #ff9ebb;
        }
        &:active{
            background: #fd8aac;
        }
    }
`;

export const textarea = css`
    font-size: inherit;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 1.25rem 1rem;
    width: 50%;
    @media (prefers-color-scheme: dark){
        background: #161616;
        border-color: #262626;
        color: #eee;
        &:focus{
            outline-color: #ccc;
        }
    }
    max-width: 100%;
    width: 100%;
    padding: 0.4rem;
    resize: vertical;
`;