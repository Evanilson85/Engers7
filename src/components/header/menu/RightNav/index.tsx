import { Ul } from './style'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const RightNav = ({ open, changeMenu }: { open : boolean, changeMenu: () => void}) => {

  return (
    <Ul open={open}>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#Home'>Home</AnchorLink>
      </li>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#about'>O que fazemos</AnchorLink>
      </li>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#weDo'>Quem somos</AnchorLink>
      </li>
      <li onClick={() => changeMenu()}>
        <AnchorLink href='#contact'>Contato</AnchorLink>
      </li>
    </Ul>
  )
}

