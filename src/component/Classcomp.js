import React from "react";
const head = {
    color: "blue"
}
class Classcomp extends React.Component{
      
     render(){
        
        return(
            <div className='classbox'>
                <h3>This is created using class component</h3>
                <p style={head}>This is done using inline CSS</p>
                <p>This is done using external CSS</p>
            </div>
        )
    }
}
export default Classcomp