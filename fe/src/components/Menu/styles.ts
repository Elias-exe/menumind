import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 200px;
  height: 125vh;
  background-color: #FAFAFA;
  border-radius: 8px;
  border: 1px solid rgba(204,204,204,0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;

  .headerContainer {
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
    margin-top: 10px;
    position: absolute;
    top: 0;
    right: 0;
    button {
      background: none;
      border: none;
    }
  }

  .pagesContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;

    a{
      font-size: 20px;
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      align-content: center;
      height: 50px;
      text-decoration: none;
      color: black;

      b{
        margin-left: 10px;
      }

      &:hover {
        background-color: gray;
        transition: 0.3s;
      }
    }
  }
`;
