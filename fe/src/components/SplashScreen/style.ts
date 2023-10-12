import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #D73035;
  left: 0;
  top: 0;
  position: fixed;

  img{
    width: 300px;
  }

  p{
    position: absolute;
    margin-top: 170px;
    font-size: 16px;
    color: white;
  }

  .loaderContainer{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;
  }
`;
