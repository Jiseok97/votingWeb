import React, { useState } from 'react'


const Contact = () => {

    const [data, setData] = useState({
        portalID:'',
        portalPassword:''
    });

    const InputEvent= (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                [name]: value,
                ...preVal,
            };
        });
    };

    const formSubmit= (e) => {
        // e.preventDefault();
        // alert(
        //     'Your portalID is ${data.portalID}. Your student number is ${data.portalPassword}.'
        //     );

    };

    return (
    <>
       <div className= "my-5">
           <h1 className="text-center">
               Welcome Voting Web
           </h1>
       </div>
       <div className="container contact_div">
           <div className="row">
               <div className= "col-md-6 col-10 mx-auto">
                   <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                ID
                            </label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "portalID"
                                value={data.portalID}
                                onChange={InputEvent}
                                placeholder="Enter your ID"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Password
                            </label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "portalPassword"
                                value={data.portalPassword}
                                onChange={InputEvent}
                                placeholder="Enter your password"
                            />
                        </div>


                        <div class= "mb-4">
                            <button class= "btn btn-outline-primary" style={{marginLeft:470}} type= "submit">
                                Sign-up
                            </button>     
                            <button class= "btn btn-outline-primary" type= "submit">
                                Sign-in
                            </button> 
                        </div>
                   </form>
               </div>
           </div>
       </div>
    </>
    );
};

export default Contact;