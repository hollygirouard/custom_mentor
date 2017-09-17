import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color: "blue"}}>Home</Link></li>
                        <li><Link to={"/user"} activeClassName={"active"}>User</Link></li>
                        <li><Link to={"/about"} activeClassName={"active"}>About</Link></li>
                        <li><Link to={"/contact"} activeClassName={"active"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
