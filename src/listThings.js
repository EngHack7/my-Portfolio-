import React from 'react';



var  count = 0;
function counter() { 
   
    return ++count;
}
const Style = {color: "honeydew",
    fontWeight: 500
};

function List(props) {
   
    const skills = props.Ihave.skill;
    return (
    <h4 style={Style}> {counter()} - {skills} .</h4>
    )
    
    
}
export default List; 