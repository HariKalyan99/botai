import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: "111px"
}));
const BasicQuestions = () => {
  return (
    <Box sx={{ width: '100%', height: "254px" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6}>
          <Item>Hello</Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BasicQuestions