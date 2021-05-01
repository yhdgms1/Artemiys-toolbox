import { css } from "linaria";

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