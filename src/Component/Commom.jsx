import React from "react";
import { NavLink } from "react-router-dom";

const Commom = (props) => {
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justiy-content-center flex-column">
                <h1>
                  {props.name}
                  <br></br>
                  <strong className="brand-name">
                    {" "}
                    the Hansei Voting Web{" "}
                  </strong>
                </h1>
                <h4 className="my-3">
                  Create, Participate the vote by this Web
                </h4>
                <div className="mt3">
                  {/* login_false: 조건 */}
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btname}
                  </NavLink>

                  {/* login_true: 조건 */}
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt={props.alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commom;
