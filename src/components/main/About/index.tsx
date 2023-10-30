import { Container, ContainerFlex } from './style'

export const About = () => {
  return (
    <>
      <Container id='about'>
        <div className='containerText'>
          <div>
            <h1>
              O QUE FAZEMOS
            </h1>
          </div>
          <ContainerFlex>
           <div className='paragraphs'>
              <p>
                A Magna Semijoias é uma empresa sediada em Belo Horizonte, especializada na criação de semijoias exclusivas e de alta qualidade. Com uma equipe talentosa de designers e ourives, estamos comprometidos em oferecer peças únicas que encantam nossas clientes. 
              </p>
              <br />
              <p>
                Nossa paixão pela arte da joalheria reflete em cada detalhe de nossos produtos, desde a seleção cuidadosa dos materiais até o acabamento impecável de nossas peças. Trabalhamos incansávelmente para criar peças que transmitam elegância, sofisticação e estilo, tonando nossas clientes ainda mais belas e confiantes.
              </p>
           </div>
          </ContainerFlex>
        </div>
      </Container>
    </>
  )
}