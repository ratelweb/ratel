import React from "react";
import "./Main.scss";

const MainPT = props => {
    return (
        <div className="main-wrap">
            <div className="main-intro">
                <img className="intro-img" src={require("assets/intro.png")} />
            </div>
        </div>
    );
};

export default MainPT;
