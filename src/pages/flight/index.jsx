import React from "react";
import Banner from "../../components/Banner";
import Services from "../../components/Services";
import "./index.css";
import { useFormik } from "formik";
import { Schema } from "../../Schema";
import { Formik } from "formik";
import white from "../../asset/images/flight_white.png";
import blue from "../../asset/images/flight-blue.png";
import { Link } from "react-router-dom";
const Flight = () => {
  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        from: "",
        to: "",
        Departure: "",
        Return: "",
        Preference: "",
        Adult: "",
        child: "",
      },
      validationSchema: Schema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(values);
  return (
    <>
      <Banner bgImg={"bg-flight"} />
      <div className="container my-5">
        <h2 className="sec-section-heading text-center pb-4">Book A Flight</h2>
        <div className="tab_box">
          <ul className="p-0 d-flex m-0">
            <li>
              <Link
                to="/flight"
                className="active d-flex align-items-center icnFlight px-4 py-2"
              >
                <p className="m-0 text">Flights</p>
                <img className="travel-icon" src={white} />
              </Link>
            </li>
            <li>
              <Link
                to="/hotel"
                className="icnHotel d-flex align-items-center px-4 py-2"
              >
                <p className="m-0 text">Hotels</p>
                <img className="travel-icon" src={blue} />
              </Link>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form p-4">
            <div className="d-flex">
              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  One way
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />

                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Return
                </label>
              </div>
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
                    value={values.from}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    value={values.to}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    value={values.Departure}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    value={values.Return}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <label htmlFor="Class">Class</label>
                  <select
                    className="form-select"
                    id="Class"
                    name="Class"
                    value={values.Class}
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
                  <label htmlFor="Preference">Preference</label>
                  <select
                    className="form-select"
                    id="Preference"
                    name="Preference"
                    value={values.Preference}
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

export default Flight;
