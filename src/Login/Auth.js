import React from 'react';


export default () => {
    const [eamil, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange =(event) => {
        const {target: {name, value}} = event;
        if(name == "email"){
            setEmail(value)
        }else if(name == "password"){
            setPassword(value);
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <from onSubmit= {onSubmit}>
                <input type="text" placeholder="Email" required value={eamil} onChange={onChange} />
                <input type="password" placeholder="Password" required vlaue={password} />
                <input type="submit" value="Log In" />
            </from>
        </div>
    )
}
