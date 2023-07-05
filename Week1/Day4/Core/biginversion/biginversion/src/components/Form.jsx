import React, {useState} from 'react'
import Display from './Display';
const Form = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: ""
    });
    const createUser = (e) => {

        e.preventDefault();

        const newUser = {
            username,
            email,
            password
        }

        setNewUser(newUser)

        console.log(newUser);
    }

    return(
        <div>
        <form onSubmit={(e)=>{createUser(e)}}>
            Username: {JSON.stringify(username)} <br />
            Email: {JSON.stringify(email)} <br />
            Password: {JSON.stringify(password)} <br />

            <div>
                <label>Username: </label> 
                <input onChange={(e)=>{setUsername(e.target.value);}}/>
            </div>

            <div>
                <label>Email Address: </label> 
                <input onChange={(e)=>{setEmail(e.target.value);}}/>
            </div>

            <div>
                <label>Password: </label>
                <input onChange={(e)=>{setPassword(e.target.value);}}/>
            </div>

            <button>Create</button>
        </form>
        <Display newUser = {newUser}/>
        </div>
    );
    
};

export default Form