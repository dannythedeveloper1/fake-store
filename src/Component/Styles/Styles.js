import styled from "styled-components";


export const Container = styled.div`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	background-color: ${(props) => props.bgColor};
	border: ${(props) => props.bdr};
    /* margin-right:"10px"; */
`;

export const Title = styled.h5`
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	color: ${(props) => props.color};
`;

export const Img = styled.img`
    width: 150;
    height:200;
    /* object-fit: contain; */
`;

export const Button = styled.button`
	background-color: ${(props) => props.bgColor};
`;