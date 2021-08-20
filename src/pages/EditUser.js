import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { updateUsers, getSingUsers } from '../redux/actions';


function EditUser() {

    let dispatch = useDispatch();


    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        adress: "",
        decretion: "",
    });
    let history = useHistory();
    let { id } = useParams();
    const { name, email, phone, adress, decretion } = state;
    const { user } = useSelector((state) => state.data)

    useEffect(() => {
        dispatch(getSingUsers(id))
    }, []);

    useEffect(() => {
        if (user) {
            setState({
                ...user
            })
        }
    }, [user]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });
    }

    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !adress || !email || !phone || !decretion) {
            setError("Hãy nhập thông tin, pleaseeeeee");
        }
        else {
            dispatch(updateUsers(state, id));
            history.push("/");
            setError("")
        }
    }

    return (
        <div>


            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form action="" className="App__container" onSubmit={handleSubmit}>

                <h2>Edit User</h2>
                <div className="App__box1">
                    <div className="App__box1--taks1">
                        <h4>full name</h4>
                        <input type="text" value={name || ""} 
                        onChange={handleInputChange} name="name"  />
                    </div>
                    <div className="App__box1--taks2">
                        <h4>Email</h4>
                        <input type="Email" onChange={handleInputChange}
                            value={email || ""} name="email"  />
                    </div>
                </div>

                <div className="App__box2">
                    <div className="App__box2--taks3">
                        <h4>Phone</h4>
                        <input type="number" onChange={handleInputChange}
                            value={phone || ""} name="phone"  />
                    </div>
                    <div className="App__box2--taks4">
                        <h4>Location</h4>
                        <input type="text" onChange={handleInputChange}
                            value={adress || ""} name="adress"  />
                    </div>
                </div>
                <div className="App__box3">
                    <div className="App__box3--taks5">
                        <h4>About me</h4>
                        <textarea type="text" onChange={handleInputChange}
                            value={decretion || ""} name="decretion" />
                    </div>
                    <button type="submit" onClick={() => history.push("/")}
                        className="Go_back">Go Back </button>
                    <button type="submit" onChange={handleInputChange} >EDIT</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser
