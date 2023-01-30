import React from "react";
import Banner from "../../components/Banner";
import voucher1 from "../../asset/images/voucher1.png";
import voucher2 from "../../asset/images/voucher2.png";

const VOUCHERLIST = [
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
  return (
    <>
      <Banner bgImg={"bg-voucher"} />
      <div className="py-md-5">
        <div className="container py-5">
          <div className="row">
            <h2 className="sec-section-heading text-center">Vouchers</h2>
            <div>
              
            </div>
            <div className="mt-4">
              <div className="container-fluid">
                <div className="row">
                  {VOUCHERLIST &&
                    VOUCHERLIST.map((item) => (
                      <div key={item.id} className="col-sm-3 text-center my-3">
                        <div className="card">
                          <img src={item.image} alt="Voucher logo" />
                          <b>{item.Name}</b>
                          <p>{item.Description}</p>
                          <b>{item.Points}</b>
                          <p>Ikirenga Points</p>
                          <button className="action-btn mx-5 mb-3 p-2">
                            Redeem
                          </button>
                        </div>
                      </div>
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

export default Vouchers;
