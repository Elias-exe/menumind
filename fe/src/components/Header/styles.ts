import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details{
    h1{
      color:#ffff;
      font-size: 2rem;
    }

    h2{
      color:#ffff;
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.9;
      margin-top: 6px;
    }

  }
  img{
    width: 200px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  top: 0;
  button {
    background: none;
    border: none;
  }
`;
