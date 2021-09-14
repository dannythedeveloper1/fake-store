import styled from "styled-components";

export const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: ${(props) => props.bgColor};
	border: ${(props) => props.bdr};
	padding: ${(props) => props.pad};
	display: ${(props) => props.display};
	align-items: ${(props) => props.alItm};
	flex-direction: ${props=>props.direction};
`;

export const Title = styled.h5`
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	color: ${(props) => props.color};
	width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Img = styled.img`
	width: 100%;
	height: 150px;
	/* width: 150px; */
	/* height: 150px; */
	object-fit: contain;
`;

export const Button = styled.button`
	background-color: ${(props) => props.bgColor};
	border-radius: 5px;
	border: none;
	padding: 5px;
	font-weight: 700;
	font-size: medium;
	cursor: pointer;
`;
