import React, { useContext } from "react";
import logo from "../images/logo.png";
import "../App.css";
import { AppContext } from "../Global Context/AppProvider";

const Header = () => {
  const { connectWalletHandler, accounts } = useContext(AppContext);
  return (
    <section className="container py-3 mt-2">
      <div className="d-flex justify-content-between">
        <img src={logo} alt="Buy me a coffee" className="img-fluid logo" />
        <button
          type="button"
          className="btn text-light"
          onClick={connectWalletHandler}
        >
          {accounts
            ? `Connected: ${accounts.substring(0, 6)}...${accounts.substring(
                38
              )}`
            : "Connect Wallet"}
        </button>
      </div>
    </section>
  );
};

export default Header;
