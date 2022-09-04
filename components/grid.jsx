import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Card from './card'

export default function ResponsiveGrid({data}) {
  return (
    <Box sx={{  mt:15}}>
     
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} display="flex" justifyContent="center" alignItems="center" >
        {data.map((item, index) => (
          <Grid item  key={index}>
          <Card data={item}></Card>

          </Grid>
        ))}
      </Grid>
      

    </Box>
  );
}
