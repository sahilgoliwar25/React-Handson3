import React, { useState } from 'react'
import FuncChildComp from './FuncChildComp'

const FuncParentComp = () => {
    const [data, setData] = useState([1,2,3,4,5])
    const [obj] = useState(
        {
            Batch: "EA23",
            Month: "March"
        }
    )

  return (
    <>
    <FuncChildComp Name="Sahil" Email="sahilgoliwar12@gmail.com"/>
    <FuncChildComp Name="Ervin" Email="peepeepoopoo69@gmail.com"/>
    <FuncChildComp value={[data, setData]}/>
    <FuncChildComp items={obj}/>
    </>
  )
}

export default FuncParentComp