import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import About from "./components/About";
import AddUser from "./components/pages/AddUser";
import EditUser from "./components/pages/EditUser";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pages/add" component={AddUser} />
          <Route exact path="/pages/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
