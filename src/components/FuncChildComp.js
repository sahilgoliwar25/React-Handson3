import React from 'react'

const FuncChildComp = (props) => {
    console.log(props.items.Batch);
  return (
    <div>
        <h1>This is Child Components</h1>
        <h2>{props.Name}</h2>
        <h2>{props.Email}</h2>
        <h2>{props.value}</h2>
        {/* <h2>{props.items.Batch}</h2> */}
        {/* <h2>{props.obj.Batch}</h2> */}
        
        
    </div>
  )
}

export default FuncChildComp