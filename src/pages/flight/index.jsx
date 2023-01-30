import React from "react";
import { useState } from "react";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import "./index.css";
const Flight = () => {
  return (
    <>
      <Banner
        bgImg={"bg-flight"}
        infoText={"Booking the perfect flight is just a click away."}
      />
      <div className="container my-5">
        <form action="">
          <div className="form p-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlfor="flexRadioDefault1">
                One way
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label className="form-check-label" htmlfor="flexRadioDefault2">
                Return
              </label>
            </div>
            <div className="row mb-md-3">
              <div className="row py-3">
                <div className="col-md-3">
                  <label htmlFor="from">From</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    name="from"
                    id="from"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="to">To</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    name="to"
                    id="to"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="Departure">Departure</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Departure"
                    aria-label="First name"
                    name="Departure"
                    id="Departure"
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="Return">Return</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
                    name="Return"
                    id="Return"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label htmlFor="Class">Class</label>
                  <select className="form-select" id="Class" name="Class">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label htmlFor="Preference">Preference</label>
                  <select
                    className="form-select"
                    id="Preference"
                    name="Preference"
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label htmlFor="Adult">Adult</label>
                  <select className="form-select" id="Adult" name="Adult">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label htmlFor="child">child</label>
                  <select className="form-select" id="child" name="child">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="container last-section my-5">
          <h2 className="sec-section-heading text-center pb-4">
            Banking Made Exciting!
          </h2>
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
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Flight;
