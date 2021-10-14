import styled from "styled-components";

export const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	background-color: ${(props) => props.bgColor};
	border: ${(props) => props.bdr};
	border-radius: ${(props) => props.radius};
	padding: ${(props) => props.pad};
	display: ${(props) => props.display};
	justify-content: ${(props) => props.jstCnt};
	align-items: ${(props) => props.alItm};
	flex-direction: ${(props) => props.direction};
	position: ${(props) => props.position};
	top: ${(props) => props.top};
`;

export const Title = styled.h5`
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	color: ${(props) => props.color};
	width: ${(props) => props.width};
	text-align: ${(props) => props.txtAlign};
	margin: ${(props) => props.margin};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const Img = styled.img`
	width: 100%;
	height: 150px;
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

export const Input = styled.input`
	font-size: 32px;
	width: 350px;
	border: none;
	outline: none;
`;

export const LoadingContainer = styled.div`
	position: fixed;
	background-color: white;
	height: 90vh;
	width: 100vw;
	z-index: 20;
	display: ${(props) => (props.loading ? "flex" : "none")};
	justify-content: center;
	align-items: center;
`;
