import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import {
  Image,
  CloseButton,
  Header,
  ModalBody,
  IngredientsContainer,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer
} from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

interface ProductModalProps {
  visible:boolean;
  onClose: () => void;
  selectedProduct: null | Product;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({visible, onClose, selectedProduct, onAddToCart}:ProductModalProps){
  if(!selectedProduct){
    return null;
  }

  function handleAddToCart() {
    onAddToCart(selectedProduct!);
    onClose();
  }

  return(
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://192.168.0.187:3001/uploads/${selectedProduct.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close></Close>
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>{selectedProduct.name}</Text>
          <Text color='#666' style={{ marginTop: 8}}>{selectedProduct.description}</Text>
        </Header>

        {selectedProduct.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color='#666'>Ingredientes</Text>

            <FlatList
              data={selectedProduct.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{marginTop:16}}
              renderItem={({item: ingredient}) => (
                <Ingredient>
                  <Text style={{marginRight:20}}>{ingredient.icon}</Text>
                  <Text size={14} color='#666'>{ingredient.name}</Text>
                </Ingredient>
              )}
            >
            </FlatList>
          </IngredientsContainer>
        )}
      </ModalBody>
      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>{formatCurrency(selectedProduct.price)}</Text>
          </PriceContainer>
          <Button onPress={handleAddToCart}>
              Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
