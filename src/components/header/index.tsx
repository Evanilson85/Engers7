import * as S from './style'
import { Menu } from './menu'
import banner from '../../assets/banner.png'
import mobileBanner from '../../assets/mobileBanner.png'

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
            <img src={mobileBanner} alt="banner" />
          </div>
        </div>
      </S.header>
    </>
  )
}