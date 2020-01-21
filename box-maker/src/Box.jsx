import React, {Component} from 'react'
import './Box.css'

class Box extends Component{
    //Default Props
    static defaultProps = {
        width: '100px',
        height: '100px',
        bg_color: 'black'
    }
    //Constructor
    //Methods
    //Render Method
    render(){
        let boxStyles = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.bg_color
        }
        return(
            <div className="Box" style={boxStyles}></div>
        )
    }
}

export default Box