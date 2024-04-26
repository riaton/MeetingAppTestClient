import React from "react";

export const Input = (props) =>{
  const{ field, size, data, func } = props

  return(
    <div>
      <b>{field}:</b><br></br>
      <input size={size} value={data} onChange={(e) => func(e.target.value)} />
    </div>
  )
}