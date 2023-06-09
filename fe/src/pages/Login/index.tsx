import { useState, ChangeEvent } from 'react';
import { Container, CardContainer } from '../Register/styles';
import MenuMind from '../../assets/images/MenuMind.png';
import { Button } from '../../components/Button';

export function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event:ChangeEvent<HTMLInputElement>){
    setEmail(event.target.value);
  }

  function handlePasswordChange(event:ChangeEvent<HTMLInputElement>){
    setPassword(event.target.value);
  }

  return(
    <Container>
      <img src={MenuMind} alt='MenuMind'></img>
      <CardContainer>
        <h1>Login</h1>
        <div className='fieldsContainer'>
          <div>
            <span>E-mail</span>
            <input
              type="email"
              placeholder='example@email.com'
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <span>Senha</span>
            <input
              type="password"
              placeholder='********'
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className='newAccount'>
            <span>Não tem uma conta? <br />
            Crie uma nova <a href="/register">Clicando Aqui!</a></span>
          </div>
          <Button>Confirmar</Button>
        </div>
      </CardContainer>
    </Container>
  );
}
