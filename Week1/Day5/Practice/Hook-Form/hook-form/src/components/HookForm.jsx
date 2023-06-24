import React, { useState } from "react";
const HookForm = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    return (
        <div>
            <form>
                <div>
                    <label>First name: </label>
                    <input onChange={(e) => {setFirstname(e.target.value);}} />
                </div>
                <div>
                    <label>Last name: </label>
                    <input onChange={(e)=>{setLastname(e.target.value)}}/>
                </div>
                <div>
                    <label>Email Address: </label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input onChange={(e)=>{setConfirm(e.target.value)}}/>
                </div>
            </form>
            <p>Your Form Data</p>
            <p>name: {firstname}</p>
            <p>last name: {lastname}</p>
            <p>email: {email}</p>
            <p>password: {password}</p>
            <p>confirm: {confirm}</p>
        </div>
    )
}
export default HookForm;