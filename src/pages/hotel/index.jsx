import React from "react";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import "./index.css";
import { useFormik } from "formik";
import { Schema } from "../../Schema";
import { Formik } from "formik";
import white from "../../asset/images/hotel-white.png";
import blue from "../../asset/images/hotel-blue.png";
import { Link } from "react-router-dom";
const Hotel = () => {
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        City: "",
        CheckIn: "",
        CheckOut: "",
        Rooms: "",
        Adult: "",
        child: "",
      },
      validationSchema: Schema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <Banner bgImg={"bg-hotel"} />
      <div className="container my-5">
        <h2 className="sec-section-heading text-center pb-4">Book A Hotel</h2>
        <div className="tab_box">
          <ul className="p-0 d-flex m-0">
            <li>
              <Link
                to="/flight"
                className="d-flex align-items-center icnFlight px-4 py-2"
              >
                <p className="m-0 text">Flights</p>
                <img className="travel-icon" src={blue} />
              </Link>
            </li>
            <li>
              <Link
                to="/hotel"
                className="active d-flex align-items-center icnFlight px-4 py-2"
              >
                <p className="m-0 text">Hotel</p>
                <img className="travel-icon" src={white} />
              </Link>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form p-4">
            <div className="row mb-md-3">
              <div className="row py-3">
                <div className="col-md-3">
                  <label htmlFor="City">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                    name="City"
                    id="City"
                    value={values.City}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="CheckIn">Check-In</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="CheckIn"
                    aria-label="First name"
                    name="CheckIn"
                    id="CheckIn"
                    value={values.CheckIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="CheckOut">Check-Out</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="CheckOut"
                    aria-label="Last name"
                    name="CheckOut"
                    id="CheckOut"
                    value={values.CheckOut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div class="col-md-3">
                  <label htmlFor="Rooms">Rooms</label>
                  <select
                    className="form-select"
                    id="Rooms"
                    name="Rooms"
                    value={values.Rooms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label htmlFor="Adult">Adult</label>
                  <select
                    className="form-select"
                    id="Adult"
                    name="Adult"
                    value={values.Adult}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label htmlFor="child">child</label>
                  <select
                    className="form-select"
                    id="child"
                    name="child"
                    value={values.child}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-md-12 mt-4 d-flex justify-content-end">
                  <button className="btn-primary mt-3 px-3 py-1" type="submit">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="container last-section my-5">
          <h2 className="sec-section-heading text-center pb-4">
            Explore more options…
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
              path={"/hotel"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotel;
