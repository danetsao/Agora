import React, {useEffect} from "react";
import { useContext, useState } from "react";
import UserFinder from "../apis/UserFinder";
import { UsersContext } from "../context/UsersContext";
import { useNavigate } from "react-router-dom";
import Popup from '../components/Popup';
import '../styles/index.css';


const RestuarantlList = (props) => {
    const { users, setUsers } = useContext(UsersContext);
    const [value, setValue] = useState('');
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserFinder.get("/");
                setUsers(response.data.data.users);
            } catch (err) {}
        };
        fetchData();
    }, []);

    const handleContact = (e, id) => {
        e.stopPropagation();
       navigate(`/${id}`);
       <input 
        type="button"
        value="Contact"
        onClick={togglePopup}
        />
        {isOpen && <Popup
          content={<>
            <b>This is the contact info</b>
          </>}
          handleClose={togglePopup}
        />}

    };


    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await UserFinder.delete(`/${id}`);
            setUsers(
                users.filter((user) => {
                    return user.id !==id;
                })
            );
        } catch (err) {
            console.log(err);
        }
    };

    const handleUserSelect = (id) => {
        navigate(`/${id}`)
    }

   return (
    <div className="list-group">
        <h1 className="explore">Explore the Marketplace</h1>
        <table className="table table-hover table-dark">
            <thead>
                <tr className="bg-">
                    <th scope="col">Name</th>
                    <th scope="col">Resturant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Shift End</th>
                    <th scope="col">Offer</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users && users.map((el) => {
                    return (
                        <tr onClick={()=> handleUserSelect(el.id)} key={el.id}>
                            <td>{el.name}</td>
                            <td>{el.resturant}</td>
                            <td>{el.location}</td>
                            <td>{el.time}</td>
                            <td>{el.offer}</td>
                            <td>
                                <button onClick={(e) => handleContact(e, el.id)} className="butn">Contact</button>
                        </td>
                        {/*<td>
                                <button onClick={(e) => handleDelete(e, el.id)} className="butn2">Delete</button>
                    </td>*/}
                        </tr>
                    );
                    })}
            </tbody>
        </table>
        <div>
           {/*<form action="">
                    <label htmlFor="name">Enter the ID you want to update: </label>
                    <input 
                        value={id} 
                        onChange={e => setName(e.target.value)}
                        id="name" 
                        className="form-control" 
                        type="text"/>                    <button type="submit" onClick={handleUpdate} className='btn btn-primary'>
                        Update
                    </button>
                </form>*/}
            </div>
    </div>
  );
};

export default RestuarantlList;