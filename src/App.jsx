import "./App.scss";

import { Switch, Route } from "react-router-dom"

import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {

  // console.log(users);

  return (
    <div className="App">

      <Switch>       
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/addUser" component={AddUser}></Route>
        <Route exact path="/editUser/:id" component={EditUser}></Route>

      </Switch>

    </div>
  );
}

export default App;
