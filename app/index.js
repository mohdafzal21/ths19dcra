//react component 
// const react = require('react')
import React from 'react'
import ReactDOM from 'react-dom'//dom
import './index.css'
import List from './List'
import Number from './Number'
import RandomName from './RandomName'
const friends = ["tom", "plant", "smacky"]
function getNum(){
    return Math.floor((Math.random() * 10)+1)
}
function getRand(){
    return friends[Math.floor(Math.random() * friends.length)]
}

 class App extends React.Component{
    render(){
         console.log('app component',this.props)
        return(
            <div className="com">
            <h1>hello react</h1>
            <h1>hello react2</h1>
            <RandomName getRand={getRand} name={"destructuring"}/>
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


