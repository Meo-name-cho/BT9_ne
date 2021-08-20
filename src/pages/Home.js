import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { loadUsers, deleteUsers } from '../redux/actions';


function Home() {

    let dispatch = useDispatch();
    const { users } = useSelector((state) => state.data)

    const handleDelete = (id) => {
        if (window.confirm("Bạn có muốn xoá user này không?")) {
            dispatch(deleteUsers(id))
        }
    }

    let history = useHistory();
    useEffect(() => {
        dispatch(loadUsers());
    }, []);
    return (
        <div>
            <button className="Add__USer" onClick={() => history.push("/addUser")}>Add Users</button>
            <div className="App__container2">
                <h2>INFORMATION STUDENT</h2>
                
                <ul className="App__responsive">
                    <li className="table__roll">
                        <div className="table__taks1" >Name</div>
                        <div className="table__taks2">Email</div>
                        <div className="table__taks3">Phone</div>
                        <div className="table__taks4">address</div>
                        <div className="table__taks5">Decretion</div>
                        <div className="table__taks5">Action</div>
                    </li>
                    <hr />
                    {users && users.map((user) => (
                        <li className="table__column" key={user.id}>
                            <div className="table__taks1" >{user.name}</div>
                            <div className="table__taks2" >{user.email}</div>
                            <div className="table__taks3" >{user.phone}</div>
                            <div className="table__taks4" >{user.adress}</div>
                            <div className="table__taks5" >{user.decretion}</div>
                            <div className="table__taks6" >
                                <button className="edit" onClick={() => history.push(`/editUser/${user.id}`)}>Edit</button>
                                <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                            </div>
                        </li>
                    ))}

                    <hr />
                </ul>
            </div>
        </div>
    )
}

export default Home
