import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Depending on the library you picked
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Typography,Box,Paper} from '@mui/material';
import List from '../components/list'
import { Formik, Form, Field } from 'formik';
import { DatePicker, DateTimePicker, TimePicker } from 'formik-mui-lab';
import * as React from 'react';

const points1=[
 
'It uses MUI as the UI and UX system. for the frontend development I have used React JS and Backend is written in Node JS.','Efficient use of API ensure its connectivity with the model working on its own hosted Django server',
' All necessary details are stored on Database as platform, thus ensuring ease of scaling.',

       ]
  const points2=[
   ' List all the candidate, display their names and status. (Can also display other important detail of the candidate as well in the list)'
    ,'Clicking on the candidate should open a detailed view.'
     ,'Add Accept and Reject action for the candidate (which will change the status value to accepted and rejected)'
     ,'Also add a "add new candidate" action to the app'
  ]
const points3=[
  'Major design choise involve the choise of data tranfers, design of api routes and the utilization of the avaliable resources'
  ,' Built a simple data Model with Django to ensure ease of use, and scalability for future use cases',
  'Design was built with MUI thus it has flexibility and customizibility, adaptable design implemented',
  'Components based design to ensure that changes can be made in real time. ',
  'ServerSide rendering used to ensure speed and amazing user experience',
  'Reactive updates so that changes are reflected on screen in real time'
]
const points4=[
'Highly customizable user experience',
"Fluid transations and reactive UI",
"Changes are reflected on screen as soon as they are made.",

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
      
 <Typography paragraph>  Thoughts put into exploring and handling edge cases</Typography>

 <Paper variant="outlined" sx={{m:5,p:5}}>
          <Typography paragraph>
          <List data={points1}/>
         </Typography>
</Paper>

<Typography paragraph> Design choices - how practical your design is</Typography>

<Paper variant="outlined" sx={{m:5,p:5}}>
         <Typography paragraph>
         <List data={points3}/>
        

  
</Typography>
</Paper>



<Typography paragraph> User experience</Typography>

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
