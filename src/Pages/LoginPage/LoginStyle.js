import styled from "styled-components";

export const LoginContainer = styled.div`
	height: 100vh;
	width: 100%;
	background: #c5bba5;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginShadow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 500px;
	border-radius: 50px;
	background: #c5bba5;
	box-shadow: 20px 20px 60px #a79f8c, -20px -20px 60px #e3d7be;
`;

export const Label = styled.label`
    font-size: 20px;
    font-weight: 700;
    margin-right: 15px;
`;

export const Input = styled.input`
    text-align:center;
	font-size: 25px;
	width: 250px;
	border: none;
	outline: none;
    border-radius: 15px;
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