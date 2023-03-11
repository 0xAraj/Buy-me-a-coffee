import React, { useContext } from "react";
import { AppContext } from "../Global Context/AppProvider";

const Memo = () => {
  const { memo } = useContext(AppContext);
  return (
    <section className="container py-3">
      <div className="row justify-content-center bg-warning">
        <div className="col-1 text-center border">SL</div>
        <div className="col-2 border">Name</div>
        <div className="col-3 border">Message</div>
        <div className="col-5 border">Address of Sender</div>
      </div>
      {memo.map((e, index) => {
        return (
          <div key={index}>
            <div className="row justify-content-center py-1 border">
              <div className="col-1 text-center">{index + 1}</div>
              <div className="col-2 ">{e.name}</div>
              <div className="col-3">{e.message}</div>
              <div className="col-5">{e.sender}</div>
            </div>
            <hr className="m-0" />
          </div>
        );
      })}
    </section>
  );
};

export default Memo;
