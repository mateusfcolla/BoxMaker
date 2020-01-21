import React, {Component} from 'react'
import './BoxForm.css'

class BoxForm extends Component {
    //Default Props
    //Constructor / State
    constructor(props){ super(props)
        this.state = {
            width: 0,
            height: 0,
            colorR: 0,
            colorG: 0,
            colorB: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //Methods
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addBox(this.state)
    }
    handleChange(evt){
        if(evt.target.value <= 255 && evt.target.value >= 0){
        this.setState({[evt.target.name]: evt.target.value})
        }
    }
    //Render Method
    render(){
        return(
            <div className="BoxForm">
                <div className="text">
                    <h1>Make a new box!</h1>
                    <p>From 0 to 255</p>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="contentForm">
                    <div className="propsForm">
                    
                    <div className="form-item">
                    <label htmlFor="width" class="labelBlock">Width: </label>
                    <input name="width" type="number" id="width" value={this.state.width} onChange={this.handleChange}/>
                    </div>

                    <div className="form-item">
                    <label htmlFor="height" class="labelBlock">Height: </label>
                    <input name="height" type="number" id="height" value={this.state.height} onChange={this.handleChange}/>
                    </div>

                    </div>

                    <div className="colorsForm form-item">

                        <div className="form-item">
                            <label htmlFor="red">R</label>
                            <input name="colorR" type="number" id="red" value={this.state.colorR} onChange={this.handleChange}/>
                        </div>

                        <div className="form-item">
                            <label htmlFor="green">G</label>
                            <input name="colorG" type="number" id="green" value={this.state.colorG} onChange={this.handleChange}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="blue">B</label>
                            <input name="colorB" type="number" id="blue" value={this.state.colorB} onChange={this.handleChange}/>
                        </div>
                    </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default BoxForm;