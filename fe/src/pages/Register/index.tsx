/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Container, CardContainer } from './styles';
import MenuMind from '../../assets/images/MenuMind.png';
import { Button } from '../../components/Button';
import useErrors from '../../hooks/useErrors';
// @ts-ignore
import isEmailValid from '../../utils/isEmailValid';
import { FormGroup } from '../../components/FormGroup';
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submiting, setSubmiting] = useState(false);

  const {
    errors,
    getErrorMessageByFieldName,
    removeError,
    setError
  } = useErrors();

  function handleEmailChange(event:ChangeEvent<HTMLInputElement>){
    setEmail(event.target.value);

    if(event.target.value && !isEmailValid(event.target.value)){
      setError({ field: 'email', message: 'Email inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event:ChangeEvent<HTMLInputElement>){
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = useCallback((event:ChangeEvent<HTMLInputElement>) =>{
    setConfirmPassword(event.target.value);
  }, []);

  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
  }

  useEffect(() => {
    if(!email && !password && !confirmPassword){
      setSubmiting(false);
    } else{
      setSubmiting(true);
    }
    if (confirmPassword !== password){
      setError({ field: 'confirmPassword', message: 'As senhas não coincidem!' });
    } else{
      removeError('confirmPassword');
    }
  },[confirmPassword]);

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <img src={MenuMind} alt='MenuMind'></img>
        <CardContainer>
          <h1>Register</h1>
          <div className='fieldsContainer'>
            <FormGroup error={getErrorMessageByFieldName('email')}>
              <span>Email: </span>
              <input
                type="email"
                placeholder='email@example.com'
                value={email}
                onChange={handleEmailChange}
              />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('password')}>
              <span>Senha: </span>
              <input
                type="password"
                placeholder='********'
                value={password}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <FormGroup error={getErrorMessageByFieldName('confirmPassword')}>
              <span>Confirmar senha: </span>
              <input
                type="password"
                placeholder='********'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </FormGroup>
            <div>
              <span>Já tem uma conta? <a href='/login'>Clique Aqui!</a></span>
            </div>
            <Button
              type='submit'
              disabled={errors.length!== 0 || !submiting}
            >Confirmar
            </Button>
          </div>
        </CardContainer>
      </Container>
    </form>
  );
}
