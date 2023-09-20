import { ContainerInfo, H1, ContainerText, Text } from './style'
import imagenAbout from '../../../assets/imagenAbout.png'

export const Info = () => {
  return  <>
    <ContainerInfo imgurl={imagenAbout} id='weDo'>
      <H1>
        CONHEÇA MAIS A ENGERS7
      </H1>
      <ContainerText>
        <Text>
          Somos uma empresa de engenharia multidisciplinar dedicada a transformar ideias em realidade. Nossa equipe de especialistas altamente qualificados abrange diversos campos, desde construção civil e instalações elétricas até manutenção e operação de ETE. Combinamos conhecimento técnico sólido com uma abordagem inovadora, entregando soluções abrangentes e sustentáveis.
        </Text>
      </ContainerText>
    </ContainerInfo>
  </>
}