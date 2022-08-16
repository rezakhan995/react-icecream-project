import React from "react";
import headerStyle from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import reactLogo from "../../assets/images/react.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <img className={headerStyle.logo} src={logo} alt="Logo" />
        </div>
        <div className="textRight">
          <img src={reactLogo} alt="React" className={headerStyle.reactLogo} />
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};

export default Header;
