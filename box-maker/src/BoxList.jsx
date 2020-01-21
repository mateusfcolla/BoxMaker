import React, {Component} from 'react'
import './BoxList.css'
import Box from './Box'
import BoxForm from './BoxForm'

class BoxList extends Component{
    //Default Props
    //Constructor
    constructor(props){ super(props)
        this.state = {
            boxes: [{}]
        }
        this.addBox = this.addBox.bind(this)
        this.removeBox = this.removeBox.bind(this)
    }
    //Methods
    addBox(box){
        this.setState(state => ({
            boxes: [...state.boxes , box]
        }))
    }
    removeBox(id){
        this.setState(state => ({
            boxes: this.state.boxes.filter(box => box.id !== id)
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
                        <Box remove={() => this.removeBox(box.id)} id={box.id} key={box.id} width={`${box.width}px`} height={`${box.height}px`} bg_color={`rgb(${box.colorR}, ${box.colorG}, ${box.colorB})`}/>
                ))}
                </div>
                <div className="form">
                    <BoxForm addBox={this.addBox} key={737} />
                </div>
            </div>
            </section>
        )

    }
}

export default BoxList