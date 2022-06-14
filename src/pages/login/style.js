import styled from 'styled-components';

export const LoginWrapper = styled.div`
	z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #eee;
`;

export const LoginBox = styled.div`
	width: 400px;
	height: 300px;
	margin: 250px auto;
	padding: 50px 0;
	background: #fff;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
    box-sizing: border-box;
`;

export const Input = styled.input`
	display: block;
	width: 200px;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin: 20px auto;
	color: #777;
    border: 1px solid #c8c8c8;
    outline: none;
    background-color: hsla(0,0%,71%,.1);
    border-radius: 4px;
`;

export const Button = styled.div`
	width: 220px;
	height: 30px;
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 15px;
	margin: 10px auto;
	text-align: center;
    cursor:pointer;
`;