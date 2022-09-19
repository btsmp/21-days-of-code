import styled from "styled-components";

export const Container = styled.main`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 32px;

  .buttons-nav {
    display: flex;
    gap: 20px;
    width: 90px;

    button{
      background: transparent;
      border: none;


      svg {
        height: 16px;
        width: auto;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 32px 90px;

    .buttons-nav {
      gap: 30px;

      button svg {
        height: 23px;
      }
      
    }
  }
`