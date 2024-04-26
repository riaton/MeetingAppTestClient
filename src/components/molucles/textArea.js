import React from "react";

export const TextArea = (props) =>{
  const{ field, cols, rows, data, func } = props

  return(
    <div>
      <b>{field}:</b><br></br>
      <textarea cols={cols} rows={rows} value={data} onChange={(e) => func(e.target.value)} />
    </div>
  )
}