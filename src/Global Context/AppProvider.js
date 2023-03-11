import React, { createContext, useEffect, useState } from "react";
import Web3 from "web3";
import loadContract from "../contracts/loadContract";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [memo, setMemo] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [reload, setReload] = useState(false);
  const [web3Api, setWeb3Api] = useState({
    web3: null,
    accounts: "",
    contract: null,
  });

  // Header component hook.
  useEffect(() => {
    getConnectedAccountsHandler();
  }, []);

  // Memo component related scripts
  useEffect(() => {
    if (web3Api) getMemoHandler();
  }, [web3Api, reload]);

  const getMemoHandler = async () => {
    const { contract } = web3Api;
    const memo = await contract.methods.getData().call();
    setMemo(memo);
  };

  // Form component related scripts
  const getNameHandler = (e) => {
    setName(e.target.value);
  };
  const getMessageHandler = (e) => {
    setMessage(e.target.value);
  };
  const submitButtonHandler = async (e) => {
    e.preventDefault();
    const { accounts, contract } = web3Api;
    if (name && message) {
      try {
        const amount = 1000000000000000;
        await contract.methods.buyCoffee(name, message).send({
          from: accounts,
          value: amount,
        });
        toast.success("Transaction Successful!!");
        setName("");
        setMessage("");
        setReload(!reload);
      } catch (error) {
        toast.error("Transaction signature denied!!");
      }
    } else {
      toast.info("Please fill the information!!");
    }
  };

  // Header component related scripts
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

  // this getConnectedAccountsHandler helps to restore the accounts when you refresh the page.
  const getConnectedAccountsHandler = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const web3 = new Web3(window.ethereum);
        const contract = await loadContract(web3);
        if (accounts.length > 0) {
          setWeb3Api({
            web3,
            accounts: accounts[0],
            contract,
          });
          setReload(!reload);
        } //else {
        //   toast.warn("Please connect your wallet");
        // }
      } catch (error) {
        toast.warn(error.message);
      }
    } else {
      toast.warn("Please install metamask");
    }
  };

  return (
    <>
      <AppContext.Provider
        value={{
          connectWalletHandler,
          ...web3Api,
          memo,
          name,
          message,
          getMessageHandler,
          getNameHandler,
          submitButtonHandler,
        }}
      >
        {children}
      </AppContext.Provider>
      <ToastContainer />
    </>
  );
};

export default AppProvider;
export { AppContext };
