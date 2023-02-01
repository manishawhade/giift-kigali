import React from "react";
import Banner from "../../../components/Banner";
import item1 from "../../../asset/images/MTN.png";
import { useLocation, useNavigate } from "react-router-dom";
const RedeemPage = () => {
  const {
    state: { item },
  } = useLocation();
  const navigte = useNavigate();

  return (
    <div className="container d-flex">
      <div className="col-md-4 d-flex h-100 justify-content-center">
        <div className="card">
          {item && <img src={item.image} alt="logo" />}
        </div>
      </div>
      <div className="col-md-8">
        <div className="card w-auto p-3">
          {item && <h3>{item.Name}</h3>}
          <div className="form-group">
            <label className="form-label">Account Name</label>
            <input className="form-control" type="text" name="" id="" />
          </div>
          <div className="form-group">
            <label className="form-label">Mobile Number</label>
            <input className="form-control" type="text" name="" id="" />
          </div>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" name="" id="" />
          </div>
          <div className="form-group">
            <label className="form-label">Select Denomination</label>
            <select className="form-control" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Cost in Ikirenga Points</label>
            <input className="form-control" type="text" name="" id="" />
          </div>
          <div className="d-flex form-group justify-content-end mt-3">
            <button className="action-btn bg-black" onClick={() => navigte(-1)}>
              Back
            </button>
            <button className="action-btn ms-3">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemPage;
