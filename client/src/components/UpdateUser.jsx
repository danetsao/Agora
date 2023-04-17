import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useState } from 'react';
import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';
import { useEffect } from 'react';
import UserFinder from '../apis/UserFinder';
import { Navigate } from "react-router-dom";

const UpdateUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {users} = useContext(UsersContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [resturant, setResturant] = useState("");
    const [position, setPosition] = useState("");
    const [time, setTime] = useState("");
    const [offer, setOffer] = useState("");
    const [posted, setPosted] = useState("");

    useEffect(() => {
        const fetchData = async() => {
            const response = await UserFinder.get(`/${id}`);
            setName(response.data.data.user.name);
            setLocation(response.data.data.user.location);
            setResturant(response.data.data.user.resturant);
            setPosition(response.data.data.user.position);
            setTime(response.data.data.user.time);
            setOffer(response.data.data.user.offer);
            setPosted(response.data.data.user.time_posted);
        };

        fetchData()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = await UserFinder.put(`/${id}`, {
            name, 
            location, 
            resturant, 
            position, 
            time, 
            offer,
            time_posted: posted
    });
        navigate("/");
    };

  return (
    <div>
        <form action="">
            <div className="form-group">
                <label htmlFor='name'>Name</label>
                <input 
                value={name} 
                onChange={e => setName(e.target.value)}
                id="name" 
                className="form-control" 
                type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor='Location'>Location</label>
                <input 
                value={location} 
                onChange={e => setLocation(e.target.value)}                
                id="Location" 
                className="form-control" 
                type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor='resturant'>Restuarant</label>
                <input 
                value={resturant} 
                onChange={e => setResturant(e.target.value)}  
                id="resturant" 
                className="form-control" 
                type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor='position'>Position</label>
                <input 
                value={position} 
                onChange={e => setPosition(e.target.value)}  
                id="position" 
                className="form-control" 
                type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor='time'>Time</label>
                <input 
                value={time} 
                onChange={e => setTime(e.target.value)}  
                id="time" 
                className="form-control" 
                type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor='offer'>Offer</label>
                <input 
                value={offer} 
                onChange={e => setOffer(e.target.value)}  
                id="offer" 
                className="form-control" 
                type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor='posted'>Time Updated</label>
                <input 
                value={posted} 
                onChange={e => setPosted(e.target.value)}  
                id="posted" 
                className="form-control" 
                type="text"/>
            </div>
            <button type="submit" onClick={handleSubmit} className='btn btn-primary'>
                Submit
            </button>
        </form>
    </div>
  );
};

export default UpdateUser;
