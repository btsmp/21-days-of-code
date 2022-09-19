import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  img {
    height: 203px;
    width: auto;

  }

  @media (min-width: 768px){
    img {
      height: auto;
      width: 100vw;
    }
  }
`