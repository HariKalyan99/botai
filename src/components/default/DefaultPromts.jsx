import { Typography } from '@mui/material'
import React from 'react'
import logoMain from "../../assets/logo.svg";
import BasicQuestions from '../basicquestions/BasicQuestions';

const DefaultPromts = () => {
  return (
    <div>
        <div className="d-flex flex-column justify-content-center align-items-center pt-5 pb-5" >
          <div className="pt-5">
            <Typography
              sx={{ fontSize: "28px", fontWeight: "bold" }}
            >
              How Can I Help You Today?
            </Typography>
          </div>
          <div className="pt-2 pb-5">
            <img src={logoMain} alt="logo" />
          </div>
        </div>
        <div className="pt-5 pb-5 mt-3">
          <BasicQuestions />
        </div>
    </div>
  )
}

export default DefaultPromts