import { Container, Div, H1, ImageIcon, P } from './style'
import { Form } from '../form'

export const Contact = () => {
  return(
    <>
      <Container>
        <Div center>
          <H1>FALE CONOSCO</H1>
          <P>
          Entre em contato conosco utilizando o formulário à seguir.
          <br /> Estamos ansiosos para ouvir você e ajudá-lo com suas necessidades de semijoias.
          </P>
        </Div>
        <Div>
          <Form />
        </Div>
      </Container>
    </>
  )
}