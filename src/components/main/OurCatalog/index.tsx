import { Container, SubContainer, H1, ContainerGrid, Card, Image, ContainerButton, Button } from './style'
import imagen1 from '../../../assets/catalog/image1.svg'
import imagen2 from '../../../assets/catalog/image2.svg'
import imagen3 from '../../../assets/catalog/image3.svg'
import imagen4 from '../../../assets/catalog/image4.svg'
import imagen5 from '../../../assets/catalog/image5.svg'

export const OurCatalog = () => {

	const catalogOne = [
		{
			id: 1,
			image: imagen1
		},
		{
			id: 2,
			image: imagen2
		},
		{
			id: 3,
			image: imagen3
		},
	]
	
	const catalogOTwo = [
		{
			id: 1,
			image: imagen4
		},
		{
			id: 2,
			image: imagen5
		}
	]


	return (
		<Container>
			<SubContainer>
				<H1>
					NOSSO CATÁLOGO
				</H1>
				<ContainerGrid>
					{catalogOne.map(({id, image}) => (
						<Card key={id}>
							<Image src={image} />
						</Card>
					))}
				</ContainerGrid>
				<ContainerGrid secudary>
					{catalogOTwo.map(({id, image}) => (
						<Card key={id}>
							<Image src={image} />
						</Card>
					))}
				</ContainerGrid>
			</SubContainer>
			<ContainerButton>
				<Button>
					VER MAIS
				</Button>
			</ContainerButton>
		</Container>
  )
}