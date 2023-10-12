import {useState} from 'react';
import { ToastContainer } from 'react-toastify';

import { Menu } from '../../components/Menu';
import Header from '../../components/Header';
import Orders from '../../components/Orders';

export function Home(){
  const [menu, setMenu] = useState(false);
  function handleCloseMenu() {
    setMenu(false);
  }

  function handleOpenMenu(){
    setMenu(true);
  }

  return (
    <>
      <Menu menuVisible={menu} onCloseMenu={handleCloseMenu}/>
      <Header onOpenMenu={handleOpenMenu}/>
      <Orders />
      <ToastContainer position='bottom-right' />
    </>
  );
}
