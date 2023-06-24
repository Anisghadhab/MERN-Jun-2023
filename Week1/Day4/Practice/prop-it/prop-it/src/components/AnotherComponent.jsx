import React, { Component } from 'react'

export default class AnotherComponent extends Component {
    render() {
        const info = this.props.info
        console.log(info)
        return (
            <div >
                {
                    info.map((info, idx)=> {
                        return (
                            <div key={idx}>
                                <h2>{info.fullname}</h2>
                                <p>Age: {info.age}</p>
                                <p>Hair Color: {info.hair}</p>
                            </div>
                        )
                    }

                    )

                }
            </div>
        )
    }
}
