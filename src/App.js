
import './App.css';
import Navbar from "./component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import NotFound from "./component/NotFound";
import CreateUser from "./component/CreateUser";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import "antd/dist/antd.css"
import  "antd/dist/antd.js"

import EditUser from "./component/EditUser";
function App() {
    return (

        <div className="App">
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover
            />
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/about' element={<About/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/create' element={<CreateUser/>}/>
                <Route exact path='/edit/:id' element={<EditUser/>}/>
                <Route path='*' element={<NotFound/>}/>

            </Routes>
        </div>

    );
}

export default App;
