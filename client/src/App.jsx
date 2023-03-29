import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import Detail from "./routes/UserDetailPage";
import AddUser from './routes/AddUser';
import { UsersContextProvider } from './context/UsersContext';
import Contact from './routes/Contact';
import All from './routes/All';

const App = () => {
    return (
        <UsersContextProvider>
            <div className="container">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path=":id/update" element={<UpdatePage/>}/>
                        <Route exact path=":id" element={<Detail/>}/>
                        <Route exact path="/add" element={<AddUser/>}/>
                        <Route exact path="/:id/contact" element={<Contact/>}/>
                        <Route exact path="/all" element={<All/>}/>
                    </Routes>
                </Router>
            </div>
        </UsersContextProvider>
    )
};

export default App;