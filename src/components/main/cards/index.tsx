import { Container, ContainerImg, Title, TextInfo } from './style'
import imagen1 from '../../../assets/imagen1.png'
import imagen2 from '../../../assets/imagen2.png'
import imagen3 from '../../../assets/imagen3.png'
import imagen4 from '../../../assets/imagen4.png'


export const Cards = () => {

  const jsonData = [
    {
      id: 1,
      img: imagen1,
      title: 'CONSTRUÇÃO CIVIL',
      text: 'Somos especialistas na gestão de execução de projetos voltados para construção civil.',
    },
    {
      id: 2,
      img: imagen2,
      title: 'INSTALAÇÕES ELÉTRICAS',
      text: 'Combinamos anos de experiência com inovação, garantindo soluções seguras e eficientes.',
    },
    {
      id: 3,
      img: imagen3,
      title: 'MANUTENÇÃO GERAL',
      text: 'Atuamos em manutenção para residências e empresas, oferecendo expertise incomparável para garantir que tudo funcione perfeitamente.',
    },
    {
      id: 4,
      img: imagen4,
      title: 'OPERAÇÃO DE ETE',
      text: 'Nossa experiência na execução dos procedimentos operacionais visam garantir que os processos sejam eficazes e ambientalmente corretos.',
    },
  ]

  return (
    <>
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
    </>
  )
}