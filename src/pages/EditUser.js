import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { AddUsers, loadUsers2 } from '../redux/actions';
import './chat.css'


import './chat.css'

function EditUser() {

    let dispatch = useDispatch();
    const { listmes } = useSelector((state) => state.data)
    console.log("Lits cua messages",listmes)
    let {id}=useParams()
    // let history = useHistory();
  
  
    const [state, setState] = useState({
        name: "",
     
    });
  
    const { name } = state;
  
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    }
  
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            return;
        }
        else {
            dispatch(AddUsers(state,id));
            
            // history.push("");
            setError("")
        }
    }
    useEffect(() => {
        dispatch(loadUsers2(id));
    }, [id]);
  
    return (
      <div>
  
  
        <main>
          <header>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
            <div>
              <h2>Chat with Vincent Porter</h2>
              <h3>already 1902 messages</h3>
            </div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
          </header>
          <ul id="chat">
            <li className="you">
              <div className="entete">
                <span className="status green" />
                <h2>Vincent</h2>
                <h3>10:12AM, Today</h3>
              </div>
              <div className="triangle" />
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
            </li>
            <li className="me">
              <div className="entete">
                <h3>10:12AM, Today</h3>
                <h2>Vincent</h2>
                <span className="status blue" />
              </div>
              <div className="triangle" />
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
            </li>
          
            <li className="you">
              <div className="entete">
                <span className="status green" />
                <h2>Vincent</h2>
                <h3>10:12AM, Today</h3>
              </div>
              <div className="triangle" />
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
            </li>
            <li className="me">
              <div className="entete">
                <h3>10:12AM, Today</h3>
                <h2>Vincent</h2>
                <span className="status blue" />
              </div>
              <div className="triangle" />
              <div className="message">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </div>
            </li>
            {listmes && listmes.map((use) => (
              <li className="me">
                <div className="entete">
                  <h3>10:12AM, Today</h3>
                  <h2>Vincent</h2>
                  <span className="status blue" />
                </div>
                <div className="triangle" />
                <div className="message">
                  {use.name}
                </div>
              </li>
            ))}

  
          </ul>
          <form onSubmit={handleSubmit}>
            <div>
              <textarea className="edittex" type="text" onChange={handleInputChange}
                value={name} name="name" placeholder="Somothing" />
              <button type="submit" onChange={handleInputChange} >Send</button>
            </div>
  
          </form>
        </main>
      </div>
  
    )
  }
export default EditUser
