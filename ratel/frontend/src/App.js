import React from "react";
import "./App.css";
import Header from "component/Header";
import MainCT from "screens/Main/MainCT";
import SearchCT from "screens/Search/SearchCT";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={MainCT} />
                    <Route path="/search" component={SearchCT} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
