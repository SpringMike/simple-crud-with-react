import React, {useEffect, useState} from 'react';
import {deleteUserById, getUser} from "../api";
import Loading from "./Loading";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {Modal, Button} from 'antd';

const Home = () => {

    const [users, setUser] = useState([])


    const loadUser = async () => await getUser().then(user => setUser(user.data.reverse()))

    const [visible, setVisible] = React.useState(false);

    const [modalText, setModalText] = React.useState('This cant be undone ! Are you sure about it ?');
    const [idModal, setIdModal] = React.useState()
    const [confirmLoading, setConfirmLoading] = React.useState(false);


    const showModal = (id) => {
        setIdModal(id)
        setVisible(true);
    };

    const handleOk = (id) => {
        setConfirmLoading(true);
        setModalText('Deleting....');
        setTimeout(async () => {
            id = idModal
            await deleteUserById(id)
            await loadUser().then(r => {
            })
            console.log(users)
            setVisible(false);
            setConfirmLoading(false);
            toast.success('Delete successfully')
            setModalText('This cant be undone ! Are you sure about it ?');
        }, 2000);
    };


    const handleCancel = () => {
        setVisible(false);
    };


    useEffect(() => {
        loadUser().then(r => {
        })
    }, [])

    return (
        <div className='container'>
            <div className="py-4">
                <h1>Home page</h1>

                <table className="table border shadow ">
                    <thead className='thead-dark table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        <>
                            {users && (
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Button type='primary' style={{marginRight: "10px"}}>
                                                <Link to={`/edit/${user.id}`}
                                                >Edit</Link>
                                            </Button>
                                            <>
                                                <Button type='danger' onClick={() => showModal(user.id)}>
                                                    Delete
                                                </Button>
                                                <Modal
                                                    title={"Delete user"}
                                                    visible={visible}
                                                    confirmLoading={confirmLoading}
                                                    onOk={() => {
                                                        handleOk(123)
                                                    }}
                                                    onCancel={handleCancel}
                                                >
                                                    <p>{modalText}</p>
                                                </Modal>
                                            </>
                                            {/*<Link to='/' onClick={() => deleteUser(`${user.id}`)}*/}
                                            {/*     >Delete</Link>*/}

                                        </td>
                                    </tr>
                                ))
                            )}
                        </>
                    }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Home;
