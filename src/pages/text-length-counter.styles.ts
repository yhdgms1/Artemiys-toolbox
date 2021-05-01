import { css } from "linaria";

export const textarea = css`
    font-family: inherit;
    font-size: inherit;
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
`;
