import { Header } from "./components/header"
import { Main } from "./components/main"
import { Footer } from "./components/footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {

  return (
    <>
     <Header />
     <Main />
     <Footer />
     <ToastContainer />
    </>
  )
}

export default App
