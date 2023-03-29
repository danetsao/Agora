import React from 'react';
import RestuarantlList from '../components/RestuarantlList';
import { Link } from "react-router-dom";
import ButtonHome from '../components/buttons/ButtonHome';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UsersContext, selectedUser, setSelectedUser } from '../context/UsersContext';
import UserFinder from '../apis/UserFinder';
import Header from '../components/Header';
import Popup from '../components/Popup';
import Footer from '../components/Footer';

export const Detail = () => {
  const {id} = useParams();
  const {selectedUser, setSelectedUser} = useContext(UsersContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await UserFinder.get(`/${id}`);

        setSelectedUser(response.data.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
          <html>
          <body>
            <div className='wrapper'>
              <div className='content'>
              <Header />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div className="card">
            <h1 className='named'> {selectedUser && selectedUser.name}</h1>
            <h1 className='positiond'>{selectedUser && selectedUser.position} at {selectedUser && selectedUser.resturant}</h1>      
            <p1 className='preinfo'>Location:</p1>  
            <p1 className='info'>{selectedUser && selectedUser.location}</p1>
            <p1 className='preinfo'>Offer:</p1>
            <p1 className='info'>{selectedUser && selectedUser.offer}</p1>
            <p1 className='preinfo'>Time Shift is Over:</p1>
            <p1 className='info'>{selectedUser && selectedUser.time}</p1>
          </div>
          <div className='popbutt'>
          <input 
        type="button"
        value="Contact"
        onClick={togglePopup}
        />
        {isOpen && <Popup
          content={<>
            <b>Coming Soon...</b>
          </>}
          handleClose={togglePopup}
        />}
        </div>

              </div>
            </div>
          </body>
        </html>
  )
};
export default Detail;