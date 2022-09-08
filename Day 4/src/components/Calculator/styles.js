import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: black;
`

export const Result = styled.div`
  color: white;
  border-bottom: 1px solid gray;
  padding: 25px;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 30px;
  text-align: right;
`

export const Keys = styled.div`
  background-color: black;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  button {
    background: transparent;
    color: white;
    padding: 20px;
    border: none;
    font-weight: 500;
    font-size: 30px;
    border: 1px solid transparent;
    border-radius: 50%;
    transition: all 0.1s;

    &:hover {
      border: 1px solid white;
    }
  }

  .operation {
    color: #e67200;

    &:hover {
      color: #e67260
    }
  }

  .equal {
    background-color: #e67200 ;
    border-radius: 99999px;

    &:hover{
      filter: brightness(0.8);
    }
  }  
`