import { Grid } from '@mui/material'
import React, { useState } from 'react'

const Promptinput = ({handleQuestion}) => {

  const [question, setQuestion] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    handleQuestion(question)
  }
  return (
    <Grid item xs={12} sx={{marginTop: "20px"}}>
    <form onSubmit={(e) => handleForm(e)}  className="d-flex justify-content-center align-items-center w-100 gap-3 h-100 pt-5">
      <input
        type="text"
        className=" flex-grow-1 p-3"
        style={{ height: "41px" }}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        className="btnPromt fw-bold"
        type='submit'
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
        type='button'
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
    </form>
</Grid>
  )
}

export default Promptinput