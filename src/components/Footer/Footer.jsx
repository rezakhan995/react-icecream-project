import React from "react";
import footerStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={["container", footerStyle.container].join(" ")}>
        <div>Copyright &copy;2020.</div>
        <div className="textRight">
          Built with <span className="red">&hearts;</span> by
          <a href="https://reactjs.org/docs/create-a-new-react-app.html">
            Create React App
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
