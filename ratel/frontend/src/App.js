import React from "react";
import "./App.css";
import Header from "component/Header";
import Footer from "component/Footer";
import MainCT from "screens/Main/MainCT";
import PaperCT from "screens/Search/PaperCT";
import BookCT from "screens/Search/BookCT";
import RecommendCT from "screens/Recommend/RecommendCT";
import LoginCT from "screens/Account/LoginCT";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignCT from "./screens/Account/SignCT";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={MainCT} />
                    <Route path="/book" component={BookCT} />
                    <Route path="/paper" component={PaperCT} />
                    <Route path="/recommend" component={RecommendCT} />
                    <Route path="/login" component={LoginCT} />
                    <Route path="/sign" component={SignCT} />
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
