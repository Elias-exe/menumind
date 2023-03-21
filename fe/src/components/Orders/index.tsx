import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders:Order[] = [{
  quantity: 5,
  products: {
    name: 'cachorro',
    imagePath: 'na',
    price: 4,
  }
}];

export default function Orders(){
  return(
    <Container>
      <OrdersBoard
        icon="⌛"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
