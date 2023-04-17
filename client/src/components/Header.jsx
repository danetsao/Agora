import React from 'react';
import { Link } from "react-router-dom";
import ButtonHome from './buttons/ButtonHome';
import AddUserBtn from './buttons/AddUserBtn';
import Footer from './Footer';
import DropDown from './DropDown';

const Header = () => {
  return (
    <div className='headerr'>
      <Link to="/">
        <button className='bn'>
          <h1 className="title1">
                  Agora
            </h1>
        </button>
      </Link>
      <div className='drop'>
      <DropDown />
      </div>
    </div>
  )
}

export default Header
