import { ContainerForms, FormCp, Title, Inputs, TextArea, SendButton } from './style'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  company: string,
  email: string,
  fone: string | number,
  observation: string
};

export const Form = () => {

  const { register, handleSubmit } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // data retorna um json dos nomes e valores dos campos
    return data
  }

  return <>
    <ContainerForms id='contact'>
      <Title>
        ENGERS7, ENGENHARIA E SUSTENTABILIDADE
      </Title>
      <FormCp onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <Inputs type='text' {...register("name")} />
        </div>
        <div>
          <label>Empresa:</label>
          <Inputs type='text' {...register("company")}/>
        </div>
        <div>
          <label>e-Mail:</label>
          <Inputs type='email' {...register("email")}/>
        </div>
        <div>
          <label>Telefone:</label>
          <Inputs type='fone' {...register("fone")}/>
        </div>
        <div>
          <label>Observações:</label>
          <TextArea {...register("observation")}/>
        </div>
        <div>
           <SendButton type='submit'>
            Enviar
          </SendButton>
        </div>
      </FormCp>
    </ContainerForms>
  </>
}