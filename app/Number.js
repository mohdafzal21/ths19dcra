import React from 'react';
class Number extends React.Component{
    render(){
        console.log('Number component',this.props)
        const {getNum} = this.props
        const num = getNum()
      return(
            <div>
            <h1>Number Componet {num}</h1>
            {num == 5 ? "hello" : "sorry" }
            {num == 5 && 
             <img src="https://source.unsplash.com/random/200x200"/>
            }
            </div>
        )
    }
}
//ES modules 
//require - require JS 

export default  Number