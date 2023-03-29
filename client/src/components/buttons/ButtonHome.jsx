import React from 'react';
import { Link } from "react-router-dom";

const ButtonHome = () => {
  return (
    <Link to="/">
    <button className='buton'>
        Home
    </button>
    </Link>
  )
}

export default ButtonHome;
