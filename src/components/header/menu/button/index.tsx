import { useState } from 'react';
import { StyledBurger } from './style'
import { RightNav } from '../RightNav';

export const Burger = () => {
  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} changeMenu={() => setOpen(false)}/>
    </>
  )
}

// export default Burger
