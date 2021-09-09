import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { AddUsers } from '../redux/actions';
import { getSingUsers } from '../redux/actions';


function AddUser() {

  let dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getSingUsers({id}))
  }, []);
  const { user } = useSelector((state) => state.data)

  useEffect(() => {
    if (user) {
      setState({
        ...user
      })
    }
  }, [user]);

  const [state, setState] = useState({
    name: "",
  });
  let history = useHistory();

  const { name } = state;

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
    if (!name ) {
      setError("Hãy nhập thông tin, pleaseeeeee");
    }
    else {
      dispatch(AddUsers(state, id));
      history.push("/");
      setError("")
    }
  }

  return (
    <div>


      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form action="" className="App__container" onSubmit={handleSubmit}>

      

       
        <div className="App__box3">
          <div className="App__box3--taks5">
            <h4>About me</h4>
            <textarea type="text" onChange={handleInputChange}
              value={name} name="name" placeholder="Somothing" />
          </div>
          <button type="submit" onClick={() => history.push("/")}
            className="Go_back">Go Back </button>
          <button type="submit" onChange={handleInputChange} >add </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
