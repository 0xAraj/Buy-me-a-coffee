import React from "react";
import logo from "../images/logo.png";
import "../App.css";

const Header = () => {
  return (
    <section className="container py-3 mt-2">
      <div className="d-flex justify-content-between">
        <img src={logo} alt="Buy me a coffee" className="img-fluid logo" />
        <button type="button" className="btn text-light">
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default Header;
