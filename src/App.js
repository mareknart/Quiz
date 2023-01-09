import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import CountryData from "./components/wiki/CountryData";
import Navbar from "./components/layout/Navbar";
import Main from "./pages/Main";

const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/main" />
        </Route>
        <Route path='/main'>
          <Main/>
        </Route>
        <Route path="/wiki" exact>
          <CountryData />
        </Route>
      </Switch>
    </Navbar>
  );
};

export default App;
