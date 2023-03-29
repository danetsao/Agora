import React, { useState , useContext} from 'react';
import UserFinder from '../apis/UserFinder';
import { UsersContext } from '../context/UsersContext';
import AddUser from '../routes/AddUser';
import { Link } from 'react-router-dom';
import ButtonHome from './buttons/ButtonHome';
import {useNavigate} from 'react-router-dom';



var today = new Date();
var cur_time = today.getHours() + ":" + today.getMinutes();

const AddRestuarant = () => {
const { addUsers } = useContext(UsersContext);
const [name, setName] = useState("");
const [resturant, setResturant] = useState("");
const [position, setPosition] = useState("");
const [location, setLocation] = useState("Location");
const [time, setTime] = useState("Shift End");
const [offer, setOffer] = useState("");
const [posted, setPosted] = useState("");
const navigate = useNavigate();

const handleSubmit = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
        const response = await UserFinder.post("/", {
            name,
            resturant,
            position,
            location,
            time,
            offer,
            time_posted: posted,
        });
        AddUser(response.data.data.user);
        navigate(`/all`);
    } catch (err) {
        console.log(err);
    }
};
  return (
    <div className="mb-4">
        <form action="">
            <div className="form-row">
                <div className="col">
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="col">
                <input value={resturant} onChange={e => setResturant(e.target.value)} type="text" className="form-control" placeholder="Restuarant"/>
                </div>
                <div className="col">
                    <select
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="custom-select my-1 mr-sm-2">
                        <option disabled>Location</option>
                        <option value="Naperville">Naperville</option>
                        <option value="Lisle">Lisle</option>
                        <option value="Aurora">Aurora</option>
                        <option value="Wheaton">Wheaton</option>
                        <option value="Bolingbrook">Wheaton</option>
                    </select>
                </div>
                <div className="col">
                <input value={position} onChange={e => setPosition(e.target.value)} type="text" className="form-control" placeholder="Position"/>
                </div>
                <div className="col">
                    <select
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        className="custom-select my-1 mr-sm-2">
                        <option disabled>Shift End</option>
                        <option value="00:00">00:00</option>
                        <option value="00:30">00:30</option>
                        <option value="01:00">01:00</option>
                        <option value="01:30">01:30</option>
                        <option value="02:00">02:00</option>
                        <option value="02:30">02:30</option>
                        <option value="03:00">03:00</option>
                        <option value="03:30">03:30</option>
                        <option value="04:00">04:00</option>
                        <option value="04:30">04:30</option>
                        <option value="05:00">05:00</option>
                        <option value="05:30">05:30</option>
                        <option value="06:00">06:00</option>
                        <option value="06:30">06:30</option>
                        <option value="07:00">07:00</option>
                        <option value="07:30">07:30</option>
                        <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option>
                        <option value="09:00">09:00</option>
                        <option value="09:30">09:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
                        <option value="23:00">23:00</option>
                        <option value="23:30">23:30</option>
                        <option value="24:00">24:00</option>
                    </select>
                </div>
                <div className="col">
                <input value={offer} onChange={e => setOffer(e.target.value)} type="text" className="form-control" placeholder="Offer"/>
                </div>
                <div className="col">
                <input value={posted} onChange={e => setPosted(e.target.value)} type="text" className="form-control" placeholder={cur_time}/>
                </div>

                <button onClick={(e) => handleSubmit(e, e.id)}
                        type="submit"
                        className="btn btn-success"
                >
                        Add
                        </button>

            </div>
        </form>
    </div>
  );
};

export default AddRestuarant;
