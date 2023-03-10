import React, { createContext, useState } from "react";
import Web3 from "web3";
import loadContract from "../contracts/loadContract";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({
    web3: null,
    accounts: "",
    contract: null,
  });
  const connectWalletHandler = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const web3 = new Web3(window.ethereum);
        const contract = await loadContract(web3);
        setWeb3Api({
          web3,
          accounts: accounts[0],
          contract,
        });
      } catch (error) {
        toast.error("Request rejected!!");
      }
    } else {
      toast.warn("Please install MetaMask");
    }
  };
  return (
    <>
      <AppContext.Provider value={{ connectWalletHandler, ...web3Api }}>
        {children}
      </AppContext.Provider>
      <ToastContainer />
    </>
  );
};

export default AppProvider;
export { AppContext };
