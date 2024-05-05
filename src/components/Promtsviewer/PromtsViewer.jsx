import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import you from '../../assets/you.svg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "111px",
  }));

const PromtsViewer = ({promts}) => {

  const [showQuestion, setShowQuestion] = useState("");
  const [showResponse, setShowResponse] = useState("");
  const [showTime, setShowTime] = useState("")
  useEffect(() => {
    setShowQuestion(promts.question);
    setTimeout(() => {
      setShowResponse(promts.response);
    }, 1000)

    console.log(promts)
  },[])
  return (

      <>
      <Grid item xs={12} rowSpacing={4}>
      
      <Item sx={{backgroundColor: "#D7C7F4", borderRadius: "10px", display: "flex", justifyContent: 'start', alignItems: "center", gap: '10px'}}>
          <img src={you} alt="your_logo" />
        <div>
        <Typography
          sx={{
            fontSize: {xs: "20px",  sm: "15px", md: "20px"},
            fontWeight: "bold",
            textAlign: "left",
            color: "black",
          }}
        >
          You
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: "16px",sm: "12px", md: "16px"},
            fontWeight: "lighter",
            textAlign: "left",
            pt: 2,
          }}
        >
          {showQuestion}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: "16px",sm: "12px", md: "16px"},
            fontWeight: "lighter",
            textAlign: "left",
            pt: 2,
          }}
        >
         {promts.time}
        </Typography>
        </div>
      </Item>
      
    </Grid>
    <Grid item xs={12} rowSpacing={4}>
      
      <Item sx={{backgroundColor: "#D7C7F4", borderRadius: "10px", display: "flex", justifyContent: 'start', alignItems: "center", gap: '10px'}}>
          <img src={you} alt="your_logo" />
        <div>
        <Typography
          sx={{
            fontSize: {xs: "20px",  sm: "15px", md: "20px"},
            fontWeight: "bold",
            textAlign: "left",
            color: "black",
          }}
        >
          BotAi
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: "16px",sm: "12px", md: "16px"},
            fontWeight: "lighter",
            textAlign: "left",
            pt: 2,
          }}
        >
          {showResponse ? showResponse :" Hold on a moment..."}
        </Typography>
        <Typography
          sx={{
            fontSize: {xs: "16px",sm: "12px", md: "16px"},
            fontWeight: "lighter",
            textAlign: "left",
            pt: 2,
          }}
        >
         {/* {promts.time} */}
        </Typography>
        </div>
      </Item>
      
    </Grid> 
      </>
      

  )
}

export default PromtsViewer