import styled from "styled-components";

export const PreFooter = styled.div`

border-top: 0.2px solid rgba(165, 161, 161, 0.3);

padding: 35px 32px 52px 32px;
background-color: #F9F9F9;
font-weight: 600;
font-size: 14px;
line-height: 17px;

color: #161616;

> div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 13px;

  }
  
  form {
    margin-top: 52px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    > div input {

      padding: 10px;
      
      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 15.8333px;
      line-height: 19px;
      color: #A8A4A4;

      background-color: #FFFFFF;

      border-radius: 3px;
      border: 1px solid #D9D9D9
    }

    > div button {
      background: #5CA720;
      border: none;
      border-radius: 3px;

      padding: 12px;

      color: #FFF;      
      font-family: 'Lato';
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.01em;

      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

@media (min-width: 900px) {
display: flex;
align-items: center;
justify-content: space-between;
padding: 40px 70px 50px 70px;

> form div input{
  height: 54px;
  width: 300px;
  border-radius: 5px 0 0 5px;
}

> form div button {
  height: 54px;
  width: 100px;
  border-radius: 0 5px 5px 0;
}
  
}
`

export const Container = styled.footer`
.footer {
  background-color: #F9F9F9;
  border-top: 0.2px solid rgba(165, 161, 161, 0.3);
  padding: 27px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.social-medias{
  > a {
    margin-right: 14px;
    > svg {
      height: 24px;
      width: 24px;
    }
  }
}

.payment-method{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  > svg{
    height: 23px;
    width: auto;
  }
}

@media (min-width: 900px){
  .footer {
    padding: 43px 77px;
  }

  .social-medias {
    > a {
      margin-right: 20px;
      > svg {
        height: 33px;
        width: auto;
      }
    }
  }

  .payment-method {
    gap: 24px;

    > svg {
      height: 30px;
      width: auto;
    }
  }

}
`