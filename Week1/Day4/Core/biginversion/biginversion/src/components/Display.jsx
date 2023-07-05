import React from 'react'

const Display = ({newUser}) => {
    return (
        <div>{JSON.stringify(newUser)}</div>
    )
}

export default Display