import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  height: calc(100%-80px);

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  
  Input {
    width: 300px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
