import React from 'react';
import { Link } from "react-router-dom";

const AddUserBtn = () => {
  return (
    <Link to="/add">
        <button className='buton'>
            Add
        </button>
        </Link>

  )
}

export default AddUserBtn;
