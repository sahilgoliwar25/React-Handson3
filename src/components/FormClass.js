import React, { Component } from 'react'
import './FormClass.css'
import FormDisplay from './FormDisplay'

export default class FormClass extends Component {
    constructor(){
        super();
        this.state={
            Name: '',
            Dept: '',
            Rating:'',
            clicked:true,
            EmpData: []
        }
    }
    
    
    changeHandle=(event)=>{
        this.setState({[event.target.name] : event.target.value})
    }
    clickHandle=()=>{
        let newObj={
            name:this.state.Name,
            dept:this.state.Dept,
            rating:this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({
            EmpData : this.state.EmpData,
            Name : '',
            Dept : '',
            Rating : '',
            clicked: false
        });
        // console.log(this.state.EmpData);
        

    }
    toggleFunction = () =>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
        <div className='body-container'>
            
            {this.state.clicked
            ?<>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
                <>
                <label htmlFor='name'>Name: </label>
                <input id='name' type='text' placeholder='Enter Name' name='Name' value={this.state.Name} onChange={this.changeHandle} required/><br/>
                </>
                <>
                <label htmlFor='dept'>Department: </label>
                <input id='dept' type='text' placeholder='Enter Department' name='Dept' value={this.state.Dept} onChange={this.changeHandle} required/><br/>
                </>
                <>
                <label htmlFor='rating'>Rating: </label>
                <input id='rating' type='text' placeholder='Enter Rating' name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/><br/>
                </>
                <button className='css-button-neumorphic' onClick={this.clickHandle} type='button'>Submit</button>
            </form>
            
            </>
            :
            <FormDisplay value={this.state.EmpData} toggleFunc={this.toggleFunction}/>
        }
      </div>
    )
  }
}
