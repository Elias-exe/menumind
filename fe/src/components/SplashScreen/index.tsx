import ReactDOM from 'react-dom';
import MenuMind from '../../assets/images/MenuMind.png';
import { Container } from './style';
import { InfinitySpin } from 'react-loader-spinner';

interface SplashScreenProps {
  loading: boolean
}

export function SplashScreen({ loading }: SplashScreenProps) {
  if(!loading){
    return;
  }else{
    return ReactDOM.createPortal(
      <Container>
        <div className='loaderContainer'>
          <img src={MenuMind} />
          <p>A maneira inteligente de pedir!</p>
          <InfinitySpin
            color='white'
          />
        </div>
      </Container>
      , document.getElementById('splash-screen')!);
  }

}
