import { css } from "linaria";

export const textarea = css`
    font-family: inherit;
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