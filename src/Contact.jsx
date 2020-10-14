import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        portalID:'',
        studentNumber:'',
        major:'',
        msg:''
    });

    const InputEvent= (event) => {
        const {name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit= (e) => {
        // e.preventDefault();
        // alert(
        //     'Your portalID is ${data.portalID}. Your student number is ${data.studentNuber}. Your major is ${data.major}. Your message is ${data.msg}'
        //     );

    };

    return (
    <>
       <div className= "my-5">
           <h1 className="text-center">
               Contact US
           </h1>
       </div>
       <div className="container contact_div">
           <div className="row">
               <div className= "col-md-6 col-10 mx-auto">
                   <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Hansei_Portal ID
                            </label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "portalID"
                                value={data.portalID}
                                onChange={InputEvent}
                                placeholder="Enter your Portal ID"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Student-number
                            </label>
                            <input 
                                type="number" 
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
                                type="text" 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                name= "major"
                                value={data.major}
                                onChange={InputEvent}
                                placeholder="Your major"
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFromControlInput1" class= "form-label">
                                Message
                            </label>
                            <textarea 
                                class="form-control" 
                                id="exampleFromControlInput1" 
                                rows= "3"
                                name= "msg"
                                value={data.msg}
                                onChange={InputEvent}
                            />
                        </div>

                        <div class= "col-12">
                            <button class= "btn btn-outline-primary" type= "submit">
                                Submit form
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