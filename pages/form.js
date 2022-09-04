import Head from 'next/head'
import * as React from 'react';
import { Box,Button, Paper,Grid,TextField } from '@mui/material'
import {FormContainer, TextFieldElement,useForm,CheckboxElement,me} from 'react-hook-form-mui'
import { Stack } from '@mui/system'
import * as FormData  from 'form-data'
const axios = require('axios').default;



export default function Home({data}) {


const Form=() => {
  const {register,control, handleSubmit} = useForm({
      defaultValues:{...data}
  })
 
  const onSubmit = async (data1) => {
       // data1['Status']=true
data1['Resume']=data1.Resume[0]
axios.put(`http://localhost:8000/person/${data1.id}/update/`,
          data1, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function () {
          console.log('SUCCESS!!');
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


              <TextFieldElement name={'Fname'} label={'First Name'} control={control} fullWidth/><br/><br/>

              <TextFieldElement  name={'Lname'} label={'Last Name'} control={control} fullWidth/><br/><br/>

              

              <TextFieldElement  name={'Email'} label={'Email'} control={control} fullWidth/><br/><br/>
              <TextFieldElement  name={'Contact_Number'} label={'Contact'} control={control} fullWidth/><br/><br/>
            

              <TextFieldElement name={'About'}  multiline   label={'About'} control={control} fullWidth/><br/><br/>

              <TextFieldElement name={'Experience'}  multiline   label={'Experience'} control={control} fullWidth/><br/><br/>

              <TextFieldElement name={'Educational_details'}  multiline   label={'Educational_details'} control={control} fullWidth/><br/><br/>
<CheckboxElement name={"Status"} control={control}></CheckboxElement>
              <Button
  variant="contained"
  component="label"
>
  Resume Upload
  <input
    type="file"
    {...register('Resume')}

  />
</Button>
                <Button type={'submit'} color={'primary'}>Submit</Button>
          </form>

  )
}

  return (
    < >
     

  <Box  sx={{m:20}}>
     <Form></Form>

       </Box>


      
      
    </>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const default_data={"Fname":"","Lname":"","Contact_Number":"","Email":"","Status":true,"About":'',"Experience":'',"Educational_details":
  "I have worked on projects of this scale which makes me perfect fit for this role. please do consider me",
  "Resume":null,
  "id":6}
  const res = await fetch(`http://localhost:8000/person/6/`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
