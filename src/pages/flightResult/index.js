import { FLIGHTSEARCHLIST, AIRLINELIST } from "../../utils/constants";
import { useState } from "react";
import "../../App.css";
import img from "../../asset/images/Rwanda-Airlines.png";
import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const flightResult = () => {
  const [flightData, setFlightData] = useState(FLIGHTSEARCHLIST);
  return (
    <>
      <div className="container d-flex justify-content-between my-5">
        <div className="col-md-3">
          <div className="border-color p-4">
            <h4>Airlines</h4>
            {AIRLINELIST.map((list) => {
              return (
                <div className="d-flex align-items-center">
                  <input type="checkbox" />
                  <p className="m-0 px-2">{list.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-8">
          {flightData.map((item, index) => {
            return (
              <>
                <table class="table">
                  <thead>
                    <tr className="d-flex justify-content-between border-color p-2">
                      <div>
                        <img src={img} alt="" />
                      </div>
                      <div className="d-flex">
                        <div className="px-4 d-flex">
                          <p className="text m-0">Ikirenga Point</p>
                          <span className="point px-2">300</span>
                        </div>
                        <p className="text m-0">Round Trip</p>
                      </div>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="d-flex justify-content-around border-color p-2">
                      <div className="date">{item.fromBoardingDate}</div>
                      <div className="time">{item.fromBoardingTime}</div>
                      <div className="main d-flex">
                        <div>{item.fromBoardingLocation}</div>
                        <div className="px-3">{item.fromDurationType}</div>
                        <div>{item.fromArrivalLocation}</div>
                      </div>
                      <div className="date">{item.fromArrivalDate}</div>
                      <div className="time">{item.fromArrivalTime}</div>
                    </tr>
                    <tr className="d-flex justify-content-around border-color p-2">
                      <div className="date">{item.fromBoardingDate}</div>
                      <div className="time">{item.fromBoardingTime}</div>
                      <div className="main d-flex">
                        <div>{item.fromBoardingLocation}</div>
                        <div className="px-3">{item.fromDurationType}</div>
                        <div>{item.fromArrivalLocation}</div>
                      </div>
                      <div className="date">{item.fromArrivalDate}</div>
                      <div className="time">{item.fromArrivalTime}</div>
                    </tr>
                    <tr className="d-flex border-color p-2 justify-content-between">
                      <div className="col-md-3">
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>See Flight Details</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Suspendisse malesuada lacus ex, sit amet
                              blandit leo lobortis eget.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </div>
                      <div>
                        <button className="btn-primary px-4 py-2">
                          Book Now
                        </button>
                      </div>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default flightResult;
