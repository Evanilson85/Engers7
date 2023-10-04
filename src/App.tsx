import { useState } from 'react'
import { Header } from "./components/header"
import { Main } from "./components/main"
import { Footer } from "./components/footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

import { Wrapper } from './styles/globalStyles';


function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
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
