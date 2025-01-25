import React from 'react';
import logo from '../img/rocky.png';
import { MdAccountCircle } from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Netflix Logo" />
      <MdAccountCircle />
    </div>
  );
}

export default Header;