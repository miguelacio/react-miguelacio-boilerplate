import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: blue;
`;

export const AppLogo = styled.img`
  width: 107px;
  height: 33px;
  object-fit: contain;
`;

export const HeaderText = styled.p`
  color: white;
  margin-left: 40px;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
