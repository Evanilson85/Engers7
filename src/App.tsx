import { Header } from "./components/header"
import { Main } from "./components/main"
import { Footer } from "./components/footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";

import GlobalStyle from './styles/globalStyles';
import { Wrapper } from './styles/wappers';


function App() {

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Main />
          <Footer />
          <ToastContainer />
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default App
