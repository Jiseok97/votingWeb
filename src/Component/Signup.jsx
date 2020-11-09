import React from 'react'
import { NavLink } from 'react-router-dom';

const Signup = (props) => {
    return (
        <section id= "header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className= "row">
                    <div className= "col-10 mx-auto">
                        <div className="row">
                        <div className= "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justiy-content-center flex-column">
                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Student-number
                            </label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "studentNumber"
                                value={data.studentNumber}
                                onChange={InputEvent}
                                placeholder="Enter your Student-number"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Your major
                            </label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "major"
                                value={data.major}
                                onChange={InputEvent}
                                placeholder="Enter your password"
                            />
                        </div>
                            <div className= "mt3">
                                <NavLink to={props.visit} className="btn-get-started">
                                    {props.btname}
                                </NavLink>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src= {props.imgsrc} 
                            className= "img-fluid animated"
                            alt={props.alt} />
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Signup;