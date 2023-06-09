import { Container } from './styles';
import { AiOutlineClose,AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

interface MenuProps {
  menuVisible: boolean;
  onCloseMenu: () => void;
}

export function Menu({ menuVisible, onCloseMenu }:MenuProps){
  if(!menuVisible) {
    return null;
  }

  return(
    <Container>
      <div className='headerContainer'>
        <button type='button' onClick={onCloseMenu}><AiOutlineClose /></button>
      </div>
      <div className='pagesContainer'>
        <Link to="/"><AiFillHome /> <b>Home</b></Link>
        <Link to="admin"><BsFillPersonFill /> <b>Admin</b></Link>
      </div>
    </Container>
  );
}
