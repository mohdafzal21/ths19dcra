import React from 'react';
//functional component 
//stateless component //16.8
//props - immutable datastructures 
//Abstraction avoid 
const RandomName = ({getRand,name})=> {
    return (
    <div>
    <h1>Random Name</h1>
    {getRand()}
    <h1>did {name}</h1>
    
    </div>

)}


export default RandomName