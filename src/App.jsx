import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import EditUser from "./pages/EditUser";

function App() {

  // console.log(users);

  return (
    <div className="App">
      
      <Router>
        <Home></Home>
        <Switch>
          <Route exact path="/editUser/:id" component={EditUser}></Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
