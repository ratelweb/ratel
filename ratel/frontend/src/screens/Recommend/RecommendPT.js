import React from "react";
import "./Search.scss";
import Footer from "component/Footer";

const SearchPT = props => {
    return (
        <div className="wrap">
            <div className="page">
                <div className="intro">
                    <img className="intro-img" src={require("assets/intro.png")} />
                </div>
                <div className="content">a자랑스러운 건국대학교! </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default SearchPT;
