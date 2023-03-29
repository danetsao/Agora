import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import UpdateUser from '../components/UpdateUser';

export const UpdatePage = (props) => {
  const test = useParams();
  console.log(test);
  return (
    <html>
    <body>
      <div className='wrapper'>
        <div className='content'>
          <div>
            <Header />
            <h1 className="text-center">Update User
            </h1>
            <UpdateUser />
          </div>
        </div>
      </div>
    </body>
  </html>
  )
};
export default UpdatePage;