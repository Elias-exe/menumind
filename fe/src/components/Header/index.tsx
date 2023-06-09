import { Container, Content, MenuContainer } from './styles';

import logo from '../../assets/images/MenuMind.png';

import { FiMenu } from 'react-icons/fi';
interface HeaderProps {
  onOpenMenu?: () => void;
}

export default function Header({ onOpenMenu } : HeaderProps){

  return (
    <Container>
      <Content>
        <MenuContainer>
          <button type='button' onClick={onOpenMenu}>
            <FiMenu size={30} color='white'/>
          </button>
        </MenuContainer>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt="WAITERAPP" />
      </Content>
    </Container>
  );
}
