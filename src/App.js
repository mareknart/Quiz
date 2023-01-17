import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import "./i18next";
import Navbar from "./components/layout/Navbar";
import Main from "./pages/Main";
import Countries from "./components/Countries";
import QestionCard from "./components/game/question/QuestionCard";

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
          <Countries />
        </Route>
        <Route path='/question' exact>
          <QestionCard/>
        </Route>
      </Switch>
    </Navbar>
  );
};

export default App;
