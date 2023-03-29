import React from 'react';
import Header from '../components/Header';
import AddRestuarant from '../components/AddRestuarant';
import { Link } from "react-router-dom";
import ButtonHome from '../components/buttons/ButtonHome';

const AddUser = () => {
  return (
    <html>
    <body>
      <div className='wrapper1'>
        <div className='content'>
            <div>
        
                <Header/>
                <AddRestuarant/>
            </div>
        </div>
      </div>
    </body>
  </html>
  )
};

export default AddUser;
