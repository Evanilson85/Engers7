import * as S from './style'
import { Menu } from './menu'
import banner from '../../assets/banner.png'
import mobileBanner from '../../assets/mobileBanner2.png'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const Header = () => {

  return (
    <>
      <Menu/>
      <S.header id='Home'>
        <div className='desktop'>
          <img src={banner} alt="banner" />
        </div>
        <div className='containerMobile'>
          <div className="mobile">
           <div className='containerText'>
              <div>
                <h1>ENGERS7</h1>
                <h2>Engenharia e Sustentabilidade</h2>
              </div>
            <div className='containerP'>
              <div className='subContainerP'>
                <BsFillTelephoneFill color='#fff'/>
                <p>(31) 99109-8777</p>
              </div>
              <div className='subContainerP'>
                <MdEmail color='#fff'/>
                <p>rogerio@engers7.com.br</p>
              </div>
            </div>
           </div>
            <img src={mobileBanner} alt="banner" />
          </div>
        </div>
      </S.header>
    </>
  )
}