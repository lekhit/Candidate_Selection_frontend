import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {Box,Button,Stack} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red,green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {FormContainer, TextFieldElement,useForm,CheckboxElement,me} from 'react-hook-form-mui'
import {useRouter} from 'next/router';
import axios from 'axios'
import ClearIcon from '@mui/icons-material/Clear';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DoneIcon from '@mui/icons-material/Done';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const router = useRouter()
  const[status,setStatus]=React.useState(props.data.Status)
  const Form=() => {
    const {register,control, handleSubmit} = useForm({
        defaultValues:{...props.data}
    })
   
    const onSubmit = async (data1) => {
      setStatus(!status)
          data1['Status']=status

  axios.put(`http://localhost:8000/person/${data1.id}/status/`,
            data1, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function (response) {
            console.log('SUCCESS!!',response.data);
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
                  <Button  type={'submit'} color={status?'error':'success'} >{status?"Reject":"Accept"}</Button><br />
            </form>
  
    )
  }

  const [expanded, setExpanded] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const handelClick= ()=>{

  router.push({
    pathname: '/form/[pid]',
    query: { pid: props.data.id },
  })
}

  return (
    <Card sx={{borderColor:"black",borderWidth:2, minHeight:200,width: 345}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: ((status)?green[500]:red[500]) }} aria-label="recipe">
          { status?<DoneIcon/>: <ClearIcon/>}
          </Avatar>
        }
        
        title={`${props.data.Fname} ${props.data.Lname}`}
        subheader={props.data.Educational_details}
        
      />
    
      <CardContent >
      
        <Typography variant="body2" color="text.secondary">
         {props.data.Experience}
        </Typography>
        
      </CardContent>

      <CardActions disableSpacing>
      <Form/>

<Button  onClick={handelClick}>
  Edit
</Button>
<Button sx={{marginLeft: 'auto'}} variant="outlined" startIcon={<CloudDownloadIcon />}>
         <a target="_blank"  href={props.data.Resume}> Resume </a>
</Button>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Box sx={{m:2}}>
          <Typography color="text.secondary">
         Status: {status?"Accepted":"Rejected"}
        </Typography>
<br />
          <Typography paragraph>About:</Typography>
          
          <Typography color="text.secondary" variant="subtitle1" gutterBottom component="div">
          {props.data.About}
           </Typography>
           </Box>
<Box sx={{m:2}}>
           <Typography  type="body4" paragraph>{'\nContact'}:</Typography>
           <Typography color="text.secondary">{`Email : ${props.data.Email}`}
           
         </Typography>
         <Typography color="text.secondary"> Contact : {props.data.Contact_Number}</Typography>
        
         

        

         
        
         </Box>
        </CardContent>
      </Collapse>
     
    </Card>
  );
}
