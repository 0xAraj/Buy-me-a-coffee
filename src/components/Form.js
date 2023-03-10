import React, { useContext, useState } from "react";
import banner from "../images/banner.jpeg";
import "../App.css";
import { AppContext } from "../Global Context/AppProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { contract, accounts } = useContext(AppContext);

  const submitButtonHandler = async (e) => {
    e.preventDefault();
    if (name && message) {
      try {
        const amount = 1000000000000000;
        await contract.methods.buyCoffee(name, message).send({
          from: accounts,
          value: amount,
        });
        setName("");
        setMessage("");
        toast.success("Transaction Successful!!");
      } catch (error) {
        toast.error("Transaction signature denied!!");
      }
    } else {
      toast.info("Please fill the information!!");
    }
  };
  return (
    <section className="container py-3">
      <div class="row justify-content-around align-items-center">
        <div class="col-5">
          <img src={banner} alt="Banner" className="img-fluid rounded banner" />
        </div>
        <div class="col-6">
          <form onSubmit={submitButtonHandler}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Name..."
                class="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">
                Message:
              </label>
              <input
                type="text"
                placeholder="Enter Message..."
                class="form-control"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" class="btn logo text-light">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Form;
