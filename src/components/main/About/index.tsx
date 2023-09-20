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
                Somos uma empresa de engenharia multidisciplinar dedicada a transformar ideias em realidade. Nossa equipe de especialistas altamente qualificados abrange diversos campos, desde construção civil e instalações elétricas até manutenção e operação de ETE. 
              </p>
              <br />
              <p>
                Combinamos conhecimento técnico sólido com uma abordagem inovadora, entregando soluções abrangentes e sustentáveis. Nossos projetos vão desde a construção civil à execução de sistemas elétricos eficientes e confiáveis, garantindo que espaços residenciais, comerciais e industriais funcionem adequadamente.
              </p>
              <br />
              <p>
                Na Engers7, não apenas construímos mantemos e operamos, mas também cultivamos parcerias duradouras com nossos clientes.
              </p>
           </div>
          </ContainerFlex>
        </div>
      </Container>
    </>
  )
}