//react component 

// const react = require('react')
import React from 'react'
import ReactDOM from 'react-dom' //dom

class App extends React.Component{
   
    render(){
        return(
            <div>
            <h1>hello react</h1>
            <h1>hello react2</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)


