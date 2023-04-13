import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Actions,
  Item,
  ProductContainer,
  Image,
  QuantityContainer,
  ProductDetails,
  Summary,
  TotalContainer
} from './styles';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Button } from '../Button';
import { Product } from '../../types/Product';
import { OrderConfirmedModal } from '../OrderConfirmedModal';

interface CartProps {
  cartItem: CartItem[],
  addToCart: (product: Product) => void,
  onDecrement: (product: Product) => void,
  onConfirmOrder: () => void
}

export function Cart({cartItem, addToCart, onDecrement, onConfirmOrder} : CartProps){
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const total = cartItem.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  function handleConfirmOrder(){
    setIsModalVisible(true);
  }

  function handleOk(){
    setIsModalVisible(false);
    onConfirmOrder();
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isModalVisible}
        onOk={handleOk}
      />
      {cartItem.length > 0 && (
        <FlatList
          data={cartItem}
          keyExtractor={cartItem => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20, maxHeight:200}}
          renderItem={({item: cartItem}) => (
            <Item>
              <ProductContainer>
                <Image source={
                  {uri: `http://192.168.0.187:3001/uploads/${cartItem.product.imagePath}`}
                }/>

                <QuantityContainer>
                  <Text size={14} color='#666'>
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>
                <ProductDetails>
                  <Text size={14} weight='600'>{cartItem.product.name}</Text>
                  <Text
                    size={14}
                    color='#666'
                    style={{marginTop:4}}
                  >
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity
                  style={{marginRight:24}}
                  onPress={() => addToCart(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onDecrement(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        ></FlatList>
      )}

      <Summary>
        <TotalContainer>
          {cartItem.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>{formatCurrency(total)}</Text>
            </>
          ) : (
            <Text color='#999'>Seu carrinho está vazio</Text>
          )
          }
        </TotalContainer>

        <Button
          onPress={handleConfirmOrder}
          disabled={cartItem.length === 0}
          loading={isLoading}
        >
              Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}
