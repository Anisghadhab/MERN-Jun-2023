import React, { Component } from 'react'

export default class Myomponent extends Component {
    render() {
        return React.createElement(
            <div>
            <h1>Hello Dojo!</h1>
            <h2>Things I need to do:</h2>
            <li>
                <ul>Learn React</ul>
                <ul>Climb Mt Everest</ul>
                <ul>Run a marathon</ul>
                <ul>Feed the dogs</ul>
            </li>

            </div>
        )
    }
}





const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));

