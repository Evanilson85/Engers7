import { Container, SubContainerItem, Card, Name, Image, P } from './style'
import image from '../../../assets/revendedora/image.png'
// import image from 'https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg'

export const Resellers = () => {

  const json = [
    {
      id: 1,
      img: image,
      name: 'Nanda Ferreira',
      p: '5 anos de Magna Jóias'
    },
    {
      id: 2,
      img: image,
      name: 'Nanda Ferreira',
      p: '5 anos de Magna Jóias'
    },
    {
      id: 3,
      img: image,
      name: 'Nanda Ferreira',
      p: '5 anos de Magna Jóias'
    },
    {
      id: 4,
      img: image,
      name: 'Nanda Ferreira',
      p: '5 anos de Magna Jóias'
    },
    {
      id: 43,
      img: image,
      name: 'Nanda Ferreira',
      p: '5 anos de Magna Jóias'
    },
    {
      id: 42,
      img: image,
      name: 'Nanda Ferreira',
      p: '5 anos de Magna Jóias'
    },
  ]

  return(
    <>
      <Container>
        <SubContainerItem>
          <h1>REVENDEDORAS</h1>
          <div className='container'>
            {json.map(({id, img, name, p}) => (
              <Card key={id}>
                <Image>
                  <img src={img} />
                </Image>
                <div className='container'>
                  <Name>{name}</Name>
                  <P>{p}</P>
                </div>
              </Card>
            ))}
          </div>
        </SubContainerItem>
      </Container>
    </>
  )
}