import React from "react";
import Services from "../../components/Services";
import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <>
      <Banner
        bgImg={"bg-img"}
        infoText={"We Reward You For Every Transaction"}
        isButton={true}
      />
      <div className="py-md-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <h2 className="sec-section-heading text-center">
                Banking Made Exciting!
              </h2>
              <p className="sec-section-text text-center py-4">
                Earn Ikirenga Points with every routine banking transaction at
                Bank of Kigali. Your Ikirenga Points give you an opportunity to
                explore an extensive selection of amazing offers from air
                travel, hotels, airtime top-ups to exciting gift vouchers and
                more.
              </p>
            </div>
            <div className="col-md-12 mt-4">
              <div className="row d-flex">
                <Services
                  name={"Air Travel"}
                  img={
                    "https://shopgateway.giift.com:8443/assets/catalog/505b3/d860f/Air%20Travel.jpg"
                  }
                  path={"/flight"}
                />
                <Services
                  name={"Hotel"}
                  img={
                    "https://shopgateway.giift.com:8443/assets/catalog/505b3/f6449/Hotel.jpg"
                  }
                  path={"#0"}
                />{" "}
                <Services
                  name={"Vouchers"}
                  img={
                    "https://idyllic-donut-936500.netlify.app/static/media/vouchers-img.2bc257f4a6efe384dbd4.png"
                  }
                  path={"/vouchers"}
                />{" "}
                <Services
                  name={"Air Time"}
                  img={
                    "https://shopgateway.giift.com:8443/assets/catalog/505b3/b46a7/Airtime.jpg"
                  }
                  path={"#0"}
                />
                <div className="col-12 category-img">
                  <NavLink to={"#0"}>
                    <div className="phovv">
                      <img
                        className="w-100 hovv"
                        src="https://shopgateway.giift.com:8443/assets/catalog/505b3/61703/BOK%20shop.png"
                      />
                      <h3 className="img-text">Shop</h3>
                      <p className="img-desc sec-section-text"></p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
