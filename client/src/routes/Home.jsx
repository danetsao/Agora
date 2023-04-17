import React from 'react';
import AddUserBtn from '../components/buttons/AddUserBtn';
import Footer from '../components/Footer';
import Header from "../components/Header";
import RestuarantlList from '../components/RestuarantlList';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <html className='yes'>
      <body className='no'>
        <div className='wrapper'>
          <div className='content'>
            <Header />
            <p className='descri'>Connect and trade with other fast-food and restuarant workers!</p>
            <div>
            <Link to="/all">
              <button className='All'>
                Explore the Marketplace
              </button>
            </Link>
            </div>
          </div>
          <h className="hel">Why?</h>
          <p className='para'>Our goal here at Agora is to give freedom to you to swap meals with resturant employees of different chains.</p>
          <h className="hel">How?</h>
          <p className='para'>We allow users to log their shifts and match up with similar users in order to promote diversity in one's diet through swapping.</p>

        </div>
      </body>
    </html>
  )
};

export default Home;