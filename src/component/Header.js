import Classcomp from './Classcomp'
import Funcomp from './Funcomp'
import React, { Component } from 'react'

 class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            funbox:false,
            classbox:false
             
        }
    }
     funchange = () => {
         this.setState({
             funbox: !this.state.funbox
         })
     }
     classchange = () => {
         this.setState({
             classbox: !this.state.classbox
         })
     }
    render() {
        return (
            <>
                
                <div className='head'>
                    <h1>Styling using functional and class component</h1>
                </div>    
                <button className="funbutton" onClick={this.funchange}>To see styling in function component</button>
                <button className="classbutton" onClick={this.classchange}>To see styling in class component</button>
                
                    {
                        this.state.funbox ? <Funcomp /> : null
                    }
                    {
                        this.state.classbox ? <Classcomp /> : null

                    }
            </>
        
        )
    }
}


export default Header