import React from 'react'
import { useState } from 'react'
const Form = (props) => {
    const [oneBox, setOneBox] = useState("")
    const handleSub = (e)=>{
        e.preventDefault()
        console.log(oneBox)
        props.addBox(oneBox)
    }
    return (
        <div>
            <fieldset>
                <form onSubmit={(e)=>{handleSub(e)}}>
                    <label>Color</label>
                    <input onChange={(e)=>{setOneBox(e.target.value)}}/>
                    <button>Add</button>
                </form>
                </fieldset>
        </div>
    )
}

export default Form