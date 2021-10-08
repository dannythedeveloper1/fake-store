import styled from "styled-components";

export const CheckoutContainer = styled.div`
	width: 1300px;
	height: 300px;
	background-color: white;
	border-radius: 15px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const ItemDetails = styled.div`
	display: flex;
	align-items: flex-start;
	width: 500px;
`;

export const CheckoutImg = styled.img`
	height: 150px;
	object-fit: contain;
    margin-right: 20px;
`;

export const CheckoutTitle = styled.h1`
	margin: 0;
`;
export const CheckoutCategory = styled.h2`
	margin: 0;
`;

export const CheckoutQuantity = styled.div`
    display:flex;
    align-items: center;
`;

export const Span = styled.span`
    font-size: large;
`;