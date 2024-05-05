import { Box, Grid } from '@mui/material'
import React from 'react'
import PromtsViewer from '../Promtsviewer/PromtsViewer'
import Promptinput from '../promtinput/Promptinput'

const Newpromts = ({handleQuestion, questionAnswers}) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
    <Grid container rowSpacing={4}>
       {questionAnswers.map((promts, ind) => <PromtsViewer promts={promts} key={ind} />)}
       </Grid>
      <Promptinput handleQuestion={handleQuestion}/>
       </Box>
  )
}

export default Newpromts