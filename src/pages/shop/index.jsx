import React from "react";
import Banner from "../../components/Banner";
import item1 from "../../asset/images/iphone11promax.png";
import item2 from "../../asset/images/microsoftsurface.png";
import item3 from "../../asset/images/hplaptop.png";
import item4 from "../../asset/images/cameraEOS.png";
import item5 from "../../asset/images/wifidrone.png";
import item6 from "../../asset/images/lgTV.png";
import item7 from "../../asset/images/cameraPanasonic.png";
import item8 from "../../asset/images/projectEpson.png";
import cartImg from "../../asset/images/icon-Cart.png";
import { useNavigate } from "react-router-dom";
const ITEMLIST = {
  trending: [
    {
      id: 1,
      Name: "iPhone 11 Pro max",
      Description: "512 GB",
      Points: "9300",
      image: item1,
    },
    {
      id: 2,
      Name: "Microsoft Surface",
      Description: "Pro 7, 15/8GB/12GB",
      Points: "10500",
      image: item2,
    },
    {
      id: 3,
      Name: "HP Pavilion 15-DK",
      Description: "10300H 8GB 512GB",
      Points: "9300",
      image: item3,
    },
    {
      id: 4,
      Name: "Can EOS",
      Description: "Camera",
      Points: "9300",
      image: item4,
    },
  ],
  featured: [
    {
      id: 5,
      Name: "Wifi Drone",
      Description: "0.3 MP 521 DW Camera",
      Points: "9300",
      image: item5,
    },
    {
      id: 6,
      Name: "LG LED TV 43 Inch",
      Description: "LM5500 Digital",
      Points: "10500",
      image: item6,
    },
    {
      id: 7,
      Name: "Panasonic Lumix",
      Description: "DMC-LX10 Points 1 Shoots",
      Points: "9300",
      image: item7,
    },
    {
      id: 8,
      Name: "Epson EB-X450",
      Description: "Projector",
      Points: "9300",
      image: item8,
    },
  ],
};

const Shop = () => {
  const navigte = useNavigate();
  return (
    <>
      <div style={{ background: "#003262" }}>
        <div className="container">
          <div id="category" className="d-flex p-2">
            <ul className="col-6 nav-bar m-0 text-light justify-content-lg-between">
              <li>
                <div id="category-item-label" style={{ position: "relative" }}>
                  <label>Electronics1</label>
                  <ul className="category-item">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                  </ul>
                </div>
              </li>
              <li>
                <div id="category-item-label" style={{ position: "relative" }}>
                  <label>Electronics2</label>
                  <ul className="category-item">
                    <li>Category 4</li>
                    <li>Category 5</li>
                    <li>Category 6</li>
                  </ul>
                </div>
              </li>
              <li>
                <label id="category-item-label">Electronics2</label>
                <ul className="category-item">
                  <li>Category 7</li>
                  <li>Category 8</li>
                  <li>Category 9</li>
                </ul>
              </li>
              <li>
                <label id="category-item-label">Electronics3</label>
                <ul className="category-item">
                  <li>Category 1</li>
                  <li>Category 2</li>
                  <li>Category 3</li>
                </ul>
              </li>
            </ul>
            <div className="col-6 d-flex justify-content-end">
              <input
                className="form-control-sm"
                type="search"
                placeholder="Search"
              />
              <img className="ms-5 p-1" src={cartImg} alt="" />
              <p className="bg-white m-1 px-2">
                <span>0</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Banner
        bgImg={"bg-shop"}
        infoText={"Let us bring aworld of great shopping "}
      />
      <div className="py-md-5">
        <div className="container py-5">
          <div className="row">
            <h2 className="sec-section-heading text-center">
              Most Trending Products
            </h2>
            <div className="mt-4">
              <div className="container-fluid">
                <div className="row">
                  {ITEMLIST &&
                    ITEMLIST.trending.map((item) => (
                      <ItemComponent
                        key={item.id}
                        item={item}
                        navigte={navigte}
                      />
                    ))}
                </div>
              </div>
            </div>
            <h2 className="sec-section-heading text-center">
              Most Featured Products
            </h2>
            <div className="mt-4">
              <div className="container-fluid">
                <div className="row">
                  {ITEMLIST &&
                    ITEMLIST.featured.map((item) => (
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
      <p>{item.Description}</p>
      <b>{item.Points}</b>
      <p>Ikirenga Points</p>
      <button
        className="action-btn mx-5 mb-3 p-2 mt-3"
        onClick={() => {
          //   navigte(`/airtime/${item.id}`, { state: { item } });
        }}
      >
        Redeem
      </button>
    </div>
  </div>
);

export default Shop;
