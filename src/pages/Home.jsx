import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';
import { loadUsers} from '../redux/actions';


function Home() {

    let dispatch = useDispatch();

    let history = useHistory();
    // let {id}=useParams()
    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const { users } = useSelector((state) => state.data)
console.log("list cua bang name",users)


   
    return (
        <div className="App__boxxx">
            <div className="App__container2">
                <ul className="App__responsive">
                    <li className="table__roll">
                        <div className="table__taks1" >Name</div>
                    </li>
                    <hr />
                    {users && users.map((user) => (
                        // <Link to={`editUser/${user.id}`}>
                            <li className="table__column" key={user.id}>
                                <div className="table__taks1" >{user.name}</div>

                                <div className="table__taks6" >
                                    <button className="edit" onClick={() => history.push(`/editUser/${user.id}`)}>xem</button>
                                </div>
                            </li>
                        // </Link>

                    ))}


                    <hr />
                </ul>
            </div>

        </div>
    )
}

export default Home
