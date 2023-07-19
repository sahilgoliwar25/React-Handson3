import React from 'react'
import { Component } from 'react'

class ClassChildCompo extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return(
            <>
                <h1>{this.props.Name}</h1>
                <h1>{this.props.value.Name}</h1>
                <h1>{this.props.value.Rollno}</h1>
            </>
        )
    }
}
export default ClassChildCompo