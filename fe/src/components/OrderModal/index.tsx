import { useEffect } from 'react';
import {  } from 'react-toastify';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { ModalBody, OrderDetails, Overlay, Actions } from './styles';

interface OrderModalProps{
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onChangeOrderStatus: () => void;
  isLoading: boolean;
}

export function OrderModal({
  visible,
  order,
  onClose,
  onCancelOrder,
  onChangeOrderStatus,
  isLoading
} : OrderModalProps){

  useEffect(() => {

    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if(!visible || !order){
    return null;
  }

  //let total = 0;
  //order.products.forEach(({product,quantity}) => {
  // total += product.price + quantity;
  //});

  const total = order.products.reduce((total, {product,quantity}) => {
    return total + (product.price * quantity);
  },0);


  return(
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="fechar"  />
          </button>
        </header>
        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '⏳'}
              {order.status === 'IN_PRODUCTION' && '👨‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em produção'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({_id, product, quantity}) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">

                  <span className="product-name">{product.name}</span>
                  <br />
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type='button'
              className='primary'
              disabled={isLoading}
              onClick={onChangeOrderStatus}
            >
              <span>{order.status === 'WAITING' ? '👨‍🍳' : '✅'}</span>
              <strong>{order.status === 'WAITING' ? 'Iniciar produção' : 'Feito!'}</strong>
            </button>
          )}
          <button
            type='button'
            className='secondary'
            disabled={isLoading}
            onClick={onCancelOrder}
          >
            Cancelar pedido
          </button>
        </Actions>

      </ModalBody>
    </Overlay>
  );
}
