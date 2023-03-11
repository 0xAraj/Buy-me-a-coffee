import React, { useContext } from "react";
import banner from "../images/banner.jpeg";
import "../App.css";
import { AppContext } from "../Global Context/AppProvider";

const Form = () => {
  const {
    getNameHandler,
    getMessageHandler,
    submitButtonHandler,
    name,
    message,
  } = useContext(AppContext);

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
                onChange={getNameHandler}
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
                onChange={getMessageHandler}
              />
            </div>

            <button type="submit" class="btn logo text-light">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
