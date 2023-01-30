import React from "react";

const Banner = ({ bgImg, infoText, isButton }) => {
  return (
    <div className={bgImg}>
      <div className="container">
        <div className="row">
          {infoText && (
            <div className="custom-banner d-flex flex-column justify-content-center mt-3">
              <h1 className="heading-banner col-md-8" style={isButton ? {color:"#ffffff"} : {color:"#003262"}}>{infoText + " "}</h1>
              {isButton && (
                <button
                  style={{ width: "15%", padding: "10px 27px" }}
                  className="action-btn"
                >
                  Know More
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
