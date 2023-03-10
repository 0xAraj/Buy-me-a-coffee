import React, { createContext, useState } from "react";
import Web3 from "web3";
import loadContract from "../contracts/loadContract";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [web3Api, setWeb3Api] = useState({
    web3: null,
    accounts: "",
    contract: null,
  });
  const connectWalletHandler = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const web3 = new Web3(window.ethereum);
      const contract = await loadContract(web3);
      console.log(contract);
      setWeb3Api({
        web3,
        accounts: accounts[0],
        contract,
      });
    }
  };
  return (
    <AppContext.Provider value={{ connectWalletHandler, ...web3Api }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };
