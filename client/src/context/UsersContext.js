import React, {useState, createContext} from "react";

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const addUser = (user) => {
        setUsers([...user, user]);
    };

    return (
        <UsersContext.Provider 
        value={{ users, 
                setUsers, 
                addUser, 
                selectedUser, 
                setSelectedUser }}>
            {props.children}
        </UsersContext.Provider>
    );
};
