//react component 
// const react = require('react')
import React from 'react'
import ReactDOM from 'react-dom'//dom
import List from './List'
import Number from './Number'
const friends = ["tom", "plant", "smacky"]
function getNum(){
    return Math.floor((Math.random() * 10)+1)
}

 class App extends React.Component{
    render(){
         console.log('app component',this.props)
        return(
            <div>
            <h1>hello react</h1>
            <h1>hello react2</h1>

            <List friends={friends} />
            <Number getNum={getNum}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)


