import React from 'react'
class List extends React.Component{
    render(){
        console.log('object props List',this.props.friends)
        return(
            <div>
            <h1>List My Friends</h1>
            <h1> I am going </h1>
            {this.props.friends.map((data ,index)=>(
                
                <li key={index}>{data}</li>
               
        ) )}
            </div>
        )
    }
}

export default List