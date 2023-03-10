import React from "react";
import banner from "../images/banner.jpeg";
import "../App.css";

const Form = () => {
  return (
    <section className="container py-3">
      <div class="row justify-content-around align-items-center">
        <div class="col-5">
          <img src={banner} alt="Banner" className="img-fluid rounded banner" />
        </div>
        <div class="col-6">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Name..."
                class="form-control"
                id="name"
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
