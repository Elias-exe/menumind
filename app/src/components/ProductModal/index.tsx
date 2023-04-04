import { Modal } from 'react-native';
import { Product } from '../../types/Product';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Image, CloseButton } from './styles';

interface ProductModalProps {
  visible:boolean;
  onClose: () => void;
  selectedProduct: null | Product;
}

export function ProductModal({visible, onClose, selectedProduct}:ProductModalProps){
  if(!selectedProduct){
    return null;
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
    </Modal>
  );
}
