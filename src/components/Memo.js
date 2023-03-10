import React from "react";

const Memo = () => {
  return (
    <section className="container py-3">
      <div className="row justify-content-center bg-warning">
        <div className="col-1 text-center border">SL</div>
        <div className="col-2 border">Name</div>
        <div className="col-3 border">Message</div>
        <div className="col-5 border">Address of Sender</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-1 text-center">1</div>
        <div className="col-2">Aditya Raj</div>
        <div className="col-3">Doing great work man!</div>
        <div className="col-5">0xd89c50aaA3B4102015eE201717e14327820c2b16</div>
      </div>
      <hr className="m-0" />
      <div className="row justify-content-center">
        <div className="col-1 text-center">1</div>
        <div className="col-2">Aditya Raj</div>
        <div className="col-3">Doing great work man!</div>
        <div className="col-5">0xd89c50aaA3B4102015eE201717e14327820c2b16</div>
      </div>
    </section>
  );
};

export default Memo;
