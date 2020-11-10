import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <>
         <div className="comtainer-fluid nav_bg">
            <div className="row">
               <div className="col-10 mx-auto">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <NavLink className="navbar-brand" to="/">
                        HVP Web
                     </NavLink>
                     <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                     >
                        <span className="navbar-toggler-icon"></span>
                     </button>

                     <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                     >
                        <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                              <NavLink className="nav-link" to="/">
                                 Home
                                 {/* <span className="sr-only">(current)</span> */}
                              </NavLink>
                           </li>

                           <li className="nav-item">
                              <NavLink
                                 activeClassName="menu_active"
                                 className="nav-link"
                                 to="/service"
                              >
                                 Board
                              </NavLink>
                           </li>

                           <li className="nav-item">
                              <NavLink
                                 activeClassName="menu_active"
                                 className="nav-link"
                                 to="/calendar"
                              >
                                 Calendar
                              </NavLink>
                           </li>

                           <li className="nav-item">
                              <NavLink
                                 activeClassName="menu_active"
                                 className="nav-link"
                                 to="/about"
                              >
                                 Vote
                              </NavLink>
                           </li>

                           {/* login_false: 조건 */}
                           <li className="nav-item">
                              <NavLink
                                 activeClassName="menu_active"
                                 className="nav-link"
                                 to="/contact"
                              >
                                 Sign-in/up
                              </NavLink>
                           </li>

                           {/* login_true: 조건 */}

                           <li className="nav-item">
                              <NavLink
                                 activeClassName="menu_active"
                                 className="nav-link"
                                 to="/auth"
                              >
                                 LogIn
                              </NavLink>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
      </>
   );
};

export default Navbar;
