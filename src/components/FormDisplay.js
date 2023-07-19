import React, { Component } from 'react'
import './FormClass.css'

export default class FormDisplay extends Component {
    constructor(props){
        super(props);
        console.log(this.props.value)
        this.state = {
            EmpData: this.props.value
        }
    }
  render() {
    return (
      <div className='display-block' >
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <div className='display-container'>
            {this.state.EmpData.map((item,index) =>{
                return(
                    <div className='elements-container' key={index}>
                        <div>Name: {item.name} | Department: {item.dept} | Rating: {item.rating}</div>
                        
                    </div>
                )
            })}
            
            </div>
            <button className='css-button-neumorphic' onClick={this.props.toggleFunc}>Go Back</button>
      </div>
    )
  }
}
