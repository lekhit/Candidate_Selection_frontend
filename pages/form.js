import Head from 'next/head'
import * as React from 'react';
import { Box,Button, Paper,Grid,TextField } from '@mui/material'
import {FormContainer, TextFieldElement,useForm,CheckboxElement,me} from 'react-hook-form-mui'
import { Stack } from '@mui/system'
import * as FormData  from 'form-data'
const axios = require('axios').default;
import {useRouter} from 'next/router'


export default function Home() {
const router=useRouter();

const Form=() => {
  const {register,control, handleSubmit} = useForm({
    defaultValues:{
'Status':true
    }
  })
 
  const onSubmit = async (data1) => {
       // data1['Status']=true
data1['Resume']=data1.Resume[0]
axios.post(`http://localhost:8000/person/`,
          data1, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
router.push('/');
        })
        .catch(function () {
          console.log('FAILURE!!',data1);
        });
//     try {
//     data1['Status']=true
// data1['Resume']=data1.Resume[0]
// console.log(data1)
//         const res = await fetch("http://localhost:8000/person/6/update/", {
//             method: "PUT",
//             body: JSON.stringify(data1),
//         }).then((res) => res.json());
//         //alert(JSON.stringify(`${res.message}, status: ${res.status}`));
//       }catch(error){
//         console.log(error);
//       }
};


  return (

          <form onSubmit={handleSubmit(onSubmit)} noValidate>


              <TextFieldElement required name={'Fname'} label={'First Name'} control={control} fullWidth/><br/><br/>

              <TextFieldElement required  name={'Lname'} label={'Last Name'} control={control} fullWidth/><br/><br/>

              

              <TextFieldElement required  name={'Email'} label={'Email'} control={control} fullWidth/><br/><br/>
              <TextFieldElement required name={'Contact_Number'} label={'Contact'} control={control} fullWidth/><br/><br/>
            

              <TextFieldElement  name={'About'}  multiline   label={'About'} control={control} fullWidth/><br/><br/>

              <TextFieldElement name={'Experience'}  multiline   label={'Experience'} control={control} fullWidth/><br/><br/>

              <TextFieldElement name={'Educational_details'}  multiline   label={'Educational_details'} control={control} fullWidth/><br/><br/>
<CheckboxElement name={"Status"} defaultChecked={true} label={'accept'} control={control}></CheckboxElement> <br></br>
              <Button
  variant="outlined"
  component="label"
>
  Resume Upload
  <input
    type="file"
    {...register('Resume')}
hidden
  />
</Button> <br></br>
<Box sx={{minHeight:10}}>

</Box>
                <Button fullWidth  variant="contained" type={'submit'} color={'primary'}>Submit</Button>
          </form>

  )
}

  return (
    < >
     

  <Box  sx={{ m:2,mt:15}}>
     <Form></Form>

       </Box>


      
      
    </>
  )
}

