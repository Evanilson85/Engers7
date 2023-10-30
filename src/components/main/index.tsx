import { Cards } from "./cards"
import { About } from "./About"
import { OurCatalog } from "./OurCatalog" 
import { Resellers } from "./Resellers"
import { Contact } from "./Contact"

export const Main = () => {
  return(
    <>
      <About />
      <Cards />
      <OurCatalog />
      <Resellers />
      <Contact />
    </>
  )
}