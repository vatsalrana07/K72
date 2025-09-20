import React, { createContext, useState } from 'react'

export const NavbarContext = createContext();

const NavContext = ({children}) => {
  const [NavOpen, setNavOpen] = useState(false);
  return (
    <div>
        <NavbarContext.Provider value={[NavOpen, setNavOpen]}>
          {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default NavContext