import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Card from './card'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  bottom : -30,
  left: 0,
  right: 0,
  margin: 'auto 0',
});
const data={
  'Fname':'Ramesh',
  'Lname':'Patil',
  'Contact_Number':9493094322,
  'Email':'r@g.com',
  'About':'love to dance and sing meaning less things are always fun. Enjoying life as it is. Things change with your approach towards life but I believe there are always things that take priority over now. This approarch needs to change ',
  'Status':true,
  'Educational_details':'4 star @Codechef | Python | Django | Next JS',
  'Experience':"I have worked on projects of this scale which makes me perfect fit for this role. please do consider me"
}
export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 ,mt:10}}>
     
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(8)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Card data={data}></Card>
            </Item>
          </Grid>
        ))}
      </Grid>
      

    </Box>
  );
}
