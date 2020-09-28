import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100%-80px);
  width: 400px;
  height: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }


  div {

    input {
      background-color: #fff;
      border: 1px solid #000;
      cursor: pointer;
      color: #000;
      font-size: 20px;
      padding: 16px 57px;
      margin-top: 20px;
    }

    input:hover {
      background-color: #000;
      color: #fff;
    }
  }
  
`;
