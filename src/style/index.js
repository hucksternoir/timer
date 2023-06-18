import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    color: #101010;
    font-family: "Poppins", monospace;
}

body{
    background-color: #f1f1f1;
    display: grid;
    justify-items: center;
    align-items: center;
}
`;

export const Container = styled.div`
  display: flex;
  text-align: center;
  gap: 12px;

  p {
    text-align: center;
    width: 100%;
    font-size: 4rem;
  }

  span {
    font-family: monospace;
  }

  button {
    font-size: 2rem;
    padding: 10px 15px;
    border: none;
    outline: none;
    width: 100%;
    cursor: pointer;
  }

  button.stop {
    background-color: #f51111;
    color: #e6e6e6;
  }

  button.stop:hover {
    background-color: #e31212;
  }

  button.stop:active {
    background-color: #ff0000;
  }

  button.start {
    background-color: #1df511;
    color: #111;
  }

  button.start:hover {
    background-color: #1ce310;
  }

  button.start:active {
    background-color: #0dff00;
  }

  button.reset {
    background-color: #dcdcdc;
    color: #050505;
  }
  button.reset:hover {
    background-color: #d1d1d1;
  }
  button.reset:active {
    background-color: #dfdfdf;
  }
  /* 
  span#milisecond {
    font-size: 2;
  } */
`;

export const Spacer = styled.div`
  margin-top: ${(props) => props.margin || "16px"};
`;
