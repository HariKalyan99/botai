import { Grid } from '@mui/material'
import React from 'react'

const Promptinput = () => {
  return (
    <Grid item xs={12} sx={{marginTop: "20px"}}>
    <div className="d-flex justify-content-center align-items-center w-100 gap-3 h-100 pt-5">
      <input
        type="text"
        className=" flex-grow-1 p-3"
        style={{ height: "41px" }}
      />
      <button
        className="btnPromt fw-bold"
        style={{
          borderRadius: "5px",
          height: "41px",
          width: "73px",
          fontsize: "20px",
          border: "none",
        }}
      >
        Ask
      </button>
      <button
        className="btnPromt fw-bold"
        style={{
          borderRadius: "5px",
          height: "41px",
          width: "73px",
          fontsize: "20px",
          border: "none",
        }}
      >
        Save
      </button>
    </div>
</Grid>
  )
}

export default Promptinput