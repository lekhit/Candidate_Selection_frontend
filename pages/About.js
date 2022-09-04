import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Depending on the library you picked
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Typography,Box,Paper} from '@mui/material';
import List from '../components/list'
import { Formik, Form, Field } from 'formik';
import { DatePicker, DateTimePicker, TimePicker } from 'formik-mui-lab';
import * as React from 'react';

const points1=[' Make a candidate model with fields of your choosing (fields may include personal details, contact info, academic and professional exp etc).' 
 , 'Candidate model should have a "status" field, which stores the current application status. By default it should be "applied"',
  
       ]
  const points2=[
   ' List all the candidate, display their names and status. (Can also display other important detail of the candidate as well in the list)'
    ,'Clicking on the candidate should open a detailed view.'
     ,'Add Accept and Reject action for the candidate (which will change the status value to accepted and rejected)'
     ,'Also add a "add new candidate" action to the app'
  ]
const points3=[
  'allow adding resume file to candidate model and build view/download resume feature.'
  ,' Use Django rest framework to send data to the frontend.'
]
const points4=[
'1. Thoughts put into exploring and handling edge cases',
"2. Design choices - how practical your design is.",
"3. User experience",
"4. Programming skills of-course."

]
function App() {
  return (
    <>
    <Box
      sx={{

        m:5,
        mt:15
      }}
    >
      <Paper variant="outlined" sx={{p:5,m:5}}>
      
 <Typography paragraph> What to do?</Typography>

 <Paper variant="outlined" sx={{m:5,p:5}}>
          <Typography paragraph>
          <List data={points1}/>
         

   
          <Typography paragraph> WorkFlow on the Home page:</Typography>

<Paper variant="outlined" sx={{p:5}}>
         <Typography paragraph>
         <List data={points2}/>
 </Typography>
</Paper>
   
</Typography>
</Paper>

<Typography paragraph> Bonus Points</Typography>

<Paper variant="outlined" sx={{m:5,p:5}}>
         <Typography paragraph>
         <List data={points3}/>
        

  
</Typography>
</Paper>



<Typography paragraph> What we look for in a solution?</Typography>

<Paper variant="outlined" sx={{m:5,p:5}}>
         <Typography paragraph>
         <List data={points4}/>
        

  
</Typography>
</Paper>




        
</Paper >
    </Box>
    </>
  );
}
export default  App;
