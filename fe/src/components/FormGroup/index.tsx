import { ReactNode } from 'react';
import { Container } from './styles';

export interface FormGroupProps {
  children: ReactNode;
  error: string;
}

export function FormGroup({children, error}: FormGroupProps){
  return (
    <Container>
      <div>
        {children}
        {error && <small>{error}</small>}
      </div>
    </Container>
  );
}
