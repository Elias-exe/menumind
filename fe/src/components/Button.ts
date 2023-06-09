import styled from 'styled-components';

export const Button = styled.button`
    margin: 0px;
    box-sizing: border-box;
    font-family: GeneralSans, sans-serif;
    cursor: pointer;
    font-size: 1rem;
    background: rgb(51, 51, 51);
    border-radius: 48px;
    border: 0px;
    color: rgb(255, 255, 255);
    padding: 12px 24px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 8px;
    -webkit-box-pack: center;
    justify-content: center;

  &:disabled{
  background: #CCC !important;
  cursor: default !important;
}
`;
