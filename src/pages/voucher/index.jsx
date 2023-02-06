import React from "react";
import Banner from "../../components/Banner";
import voucher1 from "../../asset/images/voucher1.png";
import voucher2 from "../../asset/images/voucher2.png";
import { useState, useEffect } from "react";
import Shimmer from "../../components/Shimmer";

const ITEMLIST = [
  {
    id: 1,
    Name: "Engen",
    Description: "eVouchers",
    Points: "9300",
    image: voucher1,
  },
  {
    id: 2,
    Name: "Camellia",
    Description: "eVouchers",
    Points: "10500",
    image: voucher2,
  },
  {
    id: 3,
    Name: "Engen",
    Description: "eVouchers",
    Points: "9300",
    image: voucher1,
  },
  {
    id: 4,
    Name: "Camellia",
    Description: "eVouchers",
    Points: "10500",
    image: voucher2,
  },
  {
    id: 5,
    Name: "Engen",
    Description: "eVouchers",
    Points: "9300",
    image: voucher1,
  },
  {
    id: 6,
    Name: "Camellia",
    Description: "eVouchers",
    Points: "10500",
    image: voucher2,
  },
  {
    id: 7,
    Name: "Engen",
    Description: "eVouchers",
    Points: "9300",
    image: voucher1,
  },
  {
    id: 8,
    Name: "Camellia",
    Description: "eVouchers",
    Points: "10500",
    image: voucher2,
  },
  {
    id: 9,
    Name: "Camellia",
    Description: "eVouchers",
    Points: "10500",
    image: voucher2,
  },
];

const Vouchers = () => {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 2000);
  }, []);

  return showComponent ? (
    <>
      <Banner
        bgImg={"bg-voucher"}
        infoText={"Wonderful gift vouchers for every occasion"}
      />
      <div className="py-md-5">
        <div className="container py-5">
          <div className="row">
            <h2 className="sec-section-heading text-center">Vouchers</h2>
            <div className="mx-auto row w-75 mt-3">
              <div className="d-flex flex-column col-6">
                <label className="form-label">Select Category</label>
                <select name="" id="" className="form-select">
                  <option value="">All</option>
                  <option value="">Category 1</option>
                  <option value="">Category 2</option>
                  <option value="">Category 3</option>
                </select>
              </div>
              <div className="d-flex flex-column col-6">
                <label className="form-label">Select By Brands</label>
                <input
                  type="search"
                  className="form-control"
                  placeholder="All"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="container-fluid">
                <div className="row">
                  {ITEMLIST &&
                    ITEMLIST.map((item) => (
                      <ItemComponent key={item.id} item={item} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="d-flex flex-wrap p-2 m-3 justify-content-between">
      {Array(49)
        .fill()
        .map((item, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  );
};

const ItemComponent = ({ item }) => (
  <div className="col-sm-3 text-center my-3">
    <div className="card">
      <img src={item.image} alt="Voucher logo" />
      <b>{item.Name}</b>
      <p>{item.Description}</p>
      <b>{item.Points}</b>
      <p>Ikirenga Points</p>
      <button className="action-btn mx-5 mb-3 p-2">Redeem</button>
    </div>
  </div>
);

export default Vouchers;
