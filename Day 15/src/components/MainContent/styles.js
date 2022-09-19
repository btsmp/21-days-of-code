import styled from "styled-components";

export const Container = styled.main`
  .bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #161616;
    padding: 20px 32px;
    font-size: 14px;
    line-height: 17px;
    border-bottom: 0.2px solid rgba(165, 161, 161, 0.3);

    > span:nth-child(1) {
      text-transform: uppercase;
    }
  }

  .products {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 28px 33px;
    place-content: center;
    align-items: center;
    place-items: center;
    gap: 20px 90px;
  } 

  .prod{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 5px;
    color: #161616;

    > h1  {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      padding: 2px;
    }

    > p {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      > span {
        font-weight: 700;
        color: #5CA720
      }
    }
  }
  
  .img-container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 126px;
    width: 126px;
    overflow: hidden;

    > img {
      width: 100%;
      height: auto;
    }
  }


  @media (min-width: 900px) {
    .bar{
      padding: 33px 70px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;

      > span:nth-child(2){
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
      }
    }

    .products{
      grid-template-columns: 1fr 1fr 1fr;
      padding: 57px 71px;
      gap: 65px 120px
    }

    .prod{
      gap:10px

      > h1 {
        font-size: 22px;
        line-height: 26px;
      }
      
      > p {
        font-style: normal;
        font-weight: 600;


        > span{
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
        }
      }
    }

    .img-container {
      height: 250px;
      width: 250px;

      > img {
      height: 250px;
    }
    }

  }
`