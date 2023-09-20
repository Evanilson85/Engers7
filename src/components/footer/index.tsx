import { FooterContainer } from "./style"

export const Footer = () => {
  return (
    <>
      <FooterContainer id='footer'>
          <div>
            <p>Rua Uganda, 86 Canaa - Belo Horizonte/MG</p>
            <p>(31) 99109-8777</p>
          </div>
          <div>
            <p>© {new Date().getFullYear()} - Engers7</p>
            <p>Feito com ❤️ pela <strong><a href="#" target="_blank">Code</a></strong> </p>
          </div>
      </FooterContainer>
    </>
  )
}