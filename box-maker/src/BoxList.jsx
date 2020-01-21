import React, {Component} from 'react'
import './BoxList.css'
import Box from './Box'
import BoxForm from './BoxForm'
import uuid from 'uuid'

class BoxList extends Component{
    //Default Props
    //Constructor
    constructor(props){ super(props)
        this.state = {
            boxes: [{}]
        }
        this.addBox = this.addBox.bind(this)
    }
    //Methods
    addBox(box){
        this.setState(state => ({
            boxes: [...state.boxes , box]
        }))
    }
    //Render Method
    render(){

        //Return HTML
        return(
            <section className="BoxList">
            <h1>BoxList!</h1>
            <div className="main">
                <div className="boxesContainer">
                {this.state.boxes.map(box => (
                        <Box key={uuid()} width={`${box.width}px`} height={`${box.height}px`} bg_color={`rgb(${box.colorR}, ${box.colorG}, ${box.colorB})`}/>
                ))}
                </div>
                <div className="form">
                    <BoxForm addBox={this.addBox}/>
                </div>
            </div>
            </section>
        )

    }
}

export default BoxList