import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

export default function Router(){
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
  );
}
