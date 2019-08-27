import React from 'react';


class Number extends React.Component{
    render(){
        console.log('Number component',this.props)
        return(
            <div>
            <h1>Number Componet</h1>
            {this.props.getNum()}
            </div>
        )
    }
}
//ES modules 
//require - require JS 

export default  Number