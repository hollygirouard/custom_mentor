import React, {Component} from "react";
import {Link} from "react-router";

// export const Header = (props) => {
//     return (
//         <nav className="navbar navbar-default ">
//             <div className="container">
//                 <div className="navbar-header">
//                     <ul className="nav flex-column">
//                         <li><Link to={"/home"} activeStyle={{color: "blue"}}>Home</Link></li>
//                         <li><Link to={"/user"} activeClassName={"active"}>User</Link></li>
//                         <li><Link to={"/about"} activeClassName={"active"}>About</Link></li>
//                         <li><Link to={"/contact"} activeClassName={"active"}>Contact</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

export class Header extends Component {
  facebook() {
    window.open("https://www.facebook.com/blossomcarenetwork.org");
  }
  twitter() {
    window.open("https://twitter.com/BlossomCareCO");
  }
  linkedin() {
    window.open("https://www.linkedin.com/company/3800360/");
  }
  youtube() {
    window.open("https://www.youtube.com/channel/UCA1mpGozH327Ca2NfSSYUEQ");
  }
  render() {

    return (

      <div id="documenter_sidebar">
        <a href="#documenter_cover" id="documenter_logo"></a>
        <img className="logo" src="../image/CustomMentorLogo.png"/>
        <ul id="documenter_nav">
          <li><Link to={"/home"} activeStyle={{color: "blue"}}>Home</Link></li>
          <li><Link to={"/user"} activeClassName={"active"}>User</Link></li>
          <li><Link to={"/about"} activeClassName={"active"}>About</Link></li>
          <li><Link to={"/contact"} activeClassName={"active"}>Contact</Link></li>

        </ul>
        <div className="socialLinks">
          <i onClick={this.facebook} className="fa fa-facebook-official"></i>
          <i onClick={this.twitter} className="fa fa-twitter-square"></i>
          <i onClick={this.linkedin} className="fa fa-linkedin-square"></i>
          <i onClick={this.youtube} className="fa fa-youtube-square"></i>
        </div>

      </div>

    );
  };
}
