import { Div, Container, ContainerImg, Title, TextInfo } from './style'
import imagen1 from '../../../assets/imagen1.png'
import imagen2 from '../../../assets/imagen2.png'
import imagen3 from '../../../assets/imagen3.png'
import imagen4 from '../../../assets/imagen4.png'


export const Cards = () => {

  const jsonData = [
    {
      id: 1,
      img: imagen1,
      title: 'Customização de peças',
      text: 'Trabalhamos com banhos em peças ródio e de latão.',
    },
    {
      id: 2,
      img: imagen1,
      title: 'Reparo de semijoias',
      text: 'Restauramos suas semijoias com cuidado e precisão.',
    },
    {
      id: 3,
      img: imagen1,
      title: 'Design Exclusivo',
      text: 'Criamos jóias personalizadas que refletem sua individualidade e estilo.',
    }
  ]

  return (
    <>
    <Div>
      <div>
        <h1>NOSSOS SERVIÇOS</h1>
      </div>
      <div className='containerCards'>
        {jsonData.map(({id, img, text, title}) => (
        <Container id='Cards' key={id}>
          <ContainerImg>
            <img src={img} alt="" />
          </ContainerImg>
          <div className='div'>
            <Title>
              {title}
            </Title>
            <TextInfo>
              {text}
            </TextInfo>
          </div>
        </Container>
        ))}
      </div>
    </Div>
    </>
  )
}