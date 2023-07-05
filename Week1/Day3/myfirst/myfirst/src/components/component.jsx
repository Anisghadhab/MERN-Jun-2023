import React from "react";

class AnotherComponent extends React.Component{

    render(){
        console.log(this.props.todolist)
        const todolist = this.props.todolist
        const dojo = this.props.dojo
        return(

            <div>
                <h1>{dojo}</h1>
                <h2>Things i need to do:</h2>
                {todolist.map((list, index)=>{

                    return (
                    
                        
                    <div key={index}>
                    
                        <p>{list}</p>
                    
                    </div>
                    
                    )
                })}
            </div>
        )
    }
}
export default AnotherComponent;
