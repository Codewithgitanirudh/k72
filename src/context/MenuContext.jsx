import { createContext, useState } from "react";

export const MenuState = createContext();

const MenuContext = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <MenuState.Provider value={[isMenuOpen, toggleMenu]}>
      {children}
    </MenuState.Provider>
  );
};

export default MenuContext;
