import { useState } from 'react'
import { ContainerForms, FormCp, Title, Inputs, TextArea, SendButton, LoaderContainer } from './style'
import { useForm, SubmitHandler, Controller  } from "react-hook-form";
import { toast } from 'react-toastify';

type Inputs = {
  name: string,
  email: string,
  observation: string
};

export const Form = () => {

  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<Inputs>();
  const [load, setLoad] = useState(false)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // data retorna um json dos nomes e valores dos campos
    setLoad(true)

    // try {
    //   const result = await 
    //   reset() // resetar os campos
    //   toastSucess() // toast de notificação
    //   setLoad(false) // liberar o botão de enviar e finalizar o load
    //   return result
    // } catch (error) {
    //   setLoad(false)      
    //   toastError()
    // }
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
      <FormCp onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <Inputs type='text' {...register("name", { required: true })} />
          {errors.name && <span>Nome é obrigatório</span>}
        </div>
        <div>
          <label>E-Mail:</label>
          <Inputs type='email' {...register("email", { required: true })}/>
          {errors.email && <span>Email é obrigatório</span>}
        </div>
        <div>
          <label>Messagem:</label>
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