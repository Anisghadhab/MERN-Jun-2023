import React, {useState} from 'react';
const Subcomponent = (props) => {

    const [person, setPerson] = useState(props.person)
    const [price, setNumber] = useState(props.price)

    const addOne = () =>{
        setNumber(price + 1)
    }
    return(
        <div>
            <h2>hello from the subcomponent</h2>
            <h3>{JSON.stringify(props.person)}</h3>
            <h1>{price}</h1>
            <button onClick={()=>{addOne()}}>Click</button>
        </div>
    );
}
export default Subcomponent;

