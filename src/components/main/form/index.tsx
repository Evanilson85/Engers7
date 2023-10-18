import { useState } from 'react'
import { ContainerForms, FormCp, Title, Inputs, InputsMaskFone, TextArea, SendButton, LoaderContainer } from './style'
import { useForm, SubmitHandler, Controller  } from "react-hook-form";
import { toast } from 'react-toastify';
import emailJs from '@emailjs/browser'

type Inputs = {
  name: string,
  company: string,
  email: string,
  fone: string | number,
  observation: string
};

export const Form = () => {

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<Inputs>();
  const [load, setLoad] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // data retorna um json dos nomes e valores dos campos
    setLoad(true)

    const templateParams = {
      from_name: data.name,
      email: data.email,
      from_fone: data.fone,
      message : data.observation,
      from_empresa: data.company
    } 

    try {
      const result = await emailJs.send('service_aemyzss', 'template_pvoodrk', templateParams, 'lb6noBqIqh49EcZjp')
      reset() // resetar os campos
      toastSucess() // toast de notificação
      setLoad(false) // liberar o botão de enviar e finalizar o load
      return result
    } catch (error) {
      setLoad(false)      
      toastError()
    }
  }
  
  const toastSucess = () => {
    toast.success('Mensagem enviada com Sucesso', {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: true,
     progress: undefined,
     theme: "colored",
   });
  }
  
  const toastError = () => {
    toast.error('Erro ao enviar', {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: false,
     draggable: true,
     progress: undefined,
     theme: "colored",
   });
  }

  return <>
    <ContainerForms id='contact'>
      <Title>
        ENGERS7, ENGENHARIA E SUSTENTABILIDADE
      </Title>
      <FormCp onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <Inputs type='text' {...register("name", { required: true })} />
          {errors.name && <span>Nome é obrigatório</span>}
        </div>
        <div>
          <label>Empresa:</label>
          <Inputs type='text' {...register("company", { required: true })}/>
          {errors.company && <span>Empresa é obrigatório</span>}
        </div>
        <div>
          <label>e-Mail:</label>
          <Inputs type='email' {...register("email", { required: true })}/>
          {errors.email && <span>Email é obrigatório</span>}
        </div>
        <div>
          <label>Telefone:</label>
          <Controller
            name="fone"
            control={control}
            rules={{ required: 'Telefone obrigatório' }}
            defaultValue=""
            render={({ field }) => (
              <>
                <InputsMaskFone
                  mask="(99) 99999-9999"
                  maskChar=""
                  type="tel"
                  id="phone"
                  placeholder="(00) 00000-0000"
                  {...field}
                />
                {errors.fone && ( 
                  <span>{errors.fone.message}</span>
                )}
              </>
            )}
          />
        </div>
        <div>
          <label>Observações:</label>
          <TextArea {...register("observation")}/>
        </div>
        <div>
           <SendButton type='submit' disabled={load}>
            {load ? <LoaderContainer /> : 'Enviar'}
          </SendButton>
        </div>
      </FormCp>
    </ContainerForms>
  </>
}