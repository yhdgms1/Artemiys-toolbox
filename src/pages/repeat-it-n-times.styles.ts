import { css } from "linaria";

export const input = css`
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: unset;
    background: unset;
    border-radius: 4px;
    padding: .25rem;
    @media (prefers-color-scheme: dark){
        color: #eee;
        &:focus{
            outline-color: #ccc;
        }
    }
    @media screen and (max-width: 640px){
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
`;