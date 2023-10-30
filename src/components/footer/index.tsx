import { FooterContainer } from "./style"

export const Footer = () => {
  return (
    <>
      <FooterContainer id='footer'>
          <div>
            <p>© {new Date().getFullYear()} - Magna Semijoias</p>
            <p>Feito com ❤️ pela <strong><a href="#" target="_blank">Code</a></strong> </p>
          </div>
      </FooterContainer>
    </>
  )
}