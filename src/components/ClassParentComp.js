import React, { Component } from 'react'
import ClassChildCompo from './ClassChildComp'

export default class ClassParentComp extends Component {
  constructor(){
    super();
    this.state = {
      Name: "Sahil",
      Rollno: 20
    }
  }
  render() {
    return (
      <div>
        {/* <ClassChildCompo Name="EA23" /> */}
        {/* <ClassChildCompo Name="EA24"  */}
        <ClassChildCompo value = {this.state}/>
      </div>
    )
  }
}
