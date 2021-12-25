import React, {useState} from 'react';
import {createUser} from "../api";
import {Link, useNavigate} from 'react-router-dom'
import Loading from "./Loading";
import {toast} from "react-toastify";

const CreateUser = () => {

    const [loading2, setLoading] = useState(false)
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: '',
        phone: '',
        website: ''
    })
    let navigate = useNavigate();

    const {name, username, email, phone, website} = user;




    const onSubmit =  (e) => {
        e.preventDefault()

        setLoading(true)

        setTimeout((e) => {
            createUser(user).then(r => {
                setLoading(false)
                toast.success(`${r.data.name} is created`)

            }).catch((err) => {
                setLoading(false)
                if (err.response.status === 400) {
                    toast.error(err.response.data)
                }
            }).finally(e => {
                setLoading(false)
                navigate('/')
            })
        }, 2000)


    }

    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <div>
            {loading2 ? <Loading/> : (
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h2 className="text-center mb-4">Add A User</h2>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={name}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Username"
                                    name="username"
                                    value={username}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your E-mail Address"
                                    name="email"
                                    value={email}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Phone Number"
                                    name="phone"
                                    value={phone}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Your Website Name"
                                    name="website"
                                    value={website}
                                    onChange={e => onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-primary btn-block">Add User</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CreateUser;
