import React from "react";
const head={
    color:"blue"
}
function Funcomp(){
    return(
        <div className='funbox'>
                <h3>This is created using functional component</h3>
                <p style={head}>This is done using inline CSS</p>
                <p>This is done using external CSS</p>
        </div>
       
    )
}
export default Funcomp