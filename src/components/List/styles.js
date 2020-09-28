import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  header {
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 42px;
    h2{
      font-weight:500;
      font-size:18px;
      padding:0 10px;
    }
  }

  ul {
    margin-top:20px;
  }

`;
