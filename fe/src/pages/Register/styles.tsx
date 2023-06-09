import styled from 'styled-components';

export const Container = styled.div`
  background-color: #D73035;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img{
    width: 200px;
  }
`;

export const CardContainer = styled.div`
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 300px;
  justify-content: center;
  padding: 16px 16px;

  h1{
    display: flex;
    justify-content: center;
  }

  .fieldsContainer{
    display: flex;
    flex-direction: column;
    div{
      margin-top: 8px;
      span{
        width: 40px;
      }
      input {
      border-radius: 4px;
      border: none;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
      width: 100%;
      height: 32px;
      padding: 0 16px;

      &:focus{
        border-color: #65BFDF !important;
      }
    }
  }
}
  button {
    margin-top: 16px;
  }

  .newAccount{
    color: #9e9e9e;
    font-size: 14px;
  }
`;
