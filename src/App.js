import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Main from "./pages/Main";
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
        <Route path='/question' exact>
          <QestionCard/>
        </Route>
      </Switch>
    </Navbar>
  );
};

export default App;
