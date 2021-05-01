import { css } from "linaria";

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