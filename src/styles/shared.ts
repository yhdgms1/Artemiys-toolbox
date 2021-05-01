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