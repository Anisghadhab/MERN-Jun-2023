import React from 'react';

const Display = (props) => {
    console.log(props.lox)
    return (
        <div>
            <fieldset>
                
                <p style={{ width: '100px', height: '100px', backgroundColor: props.lox }}>{props.lox}</p>
            </fieldset>
        </div>
    );
};

export default Display;
