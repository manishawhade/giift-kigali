import React from "react";
import Banner from "../../components/Banner";
import item1 from "../../asset/images/MTN.png";
import item2 from "../../asset/images/Airtel.png";
import item3 from "../../asset/images/Vodafone.png";
import { useNavigate } from "react-router-dom";
const ITEMLIST = [
  {
    id: 1,
    Name: "MTN",
    image: item1,
  },
  {
    id: 2,
    Name: "Airtel",
    image: item2,
  },
  {
    id: 3,
    Name: "Vodafone",
    image: item3,
  },
  {
    id: 4,
    Name: "MTN",
    image: item1,
  },
  {
    id: 5,
    Name: "Airtel",
    image: item2,
  },
  {
    id: 6,
    Name: "Vodafone",
    image: item3,
  },
];

const AirTime = () => {
  const navigte = useNavigate();
  return (
    <>
      <Banner bgImg={"bg-airtime"} infoText={"Redeem for Airtime with ease"} />
      <div className="py-md-5">
        <div className="container py-5">
          <div className="row">
            <h2 className="sec-section-heading text-center">Airtime</h2>
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
                      <ItemComponent
                        key={item.id}
                        item={item}
                        navigte={navigte}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ItemComponent = ({ item, navigte }) => (
  <div className="col-sm-3 text-center my-3">
    <div className="card">
      <img src={item.image} alt="logo" />
      <b>{item.Name}</b>
      <button
        className="action-btn mx-5 mb-3 p-2 mt-3"
        onClick={() => {
          navigte(`/airtime/${item.id}`, { state: { item } });
        }}
      >
        Redeem
      </button>
    </div>
  </div>
);

export default AirTime;
