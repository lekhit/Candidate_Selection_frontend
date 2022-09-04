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
  const [expanded, setExpanded] = React.useState(false);
  const[status,setStatus]=React.useState(props.data.Status)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{borderColor:"black",borderWidth:2, minWidth: 345,minHeight:200 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: ((status)?green[500]:red[500]) }} aria-label="recipe">
            {`${props.data.Fname[0]}${props.data.Lname[0]}`}
          </Avatar>
        }
        
        title={`${props.data.Fname} ${props.data.Lname}`}
        subheader={props.data.Educational_details}
        
      />
    
      <CardContent>
      
        <Typography variant="body2" color="text.secondary">
         {props.data.Experience}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

<Stack direction="row" justifyContent="space-around" spacing={1} sx={{ mb: 1 }}>
 
        <Button  variant="outlined">
          {status?"Reject":"Accept"}
        </Button>
        <Button  variant="outlined">
          Edit
        </Button>
        </Stack>
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
          <Typography paragraph>About:</Typography>
         
          <Typography>
           {props.data.About}
           </Typography>
           </Box>
<Box sx={{m:2}}>
           <Typography paragraph>{'\nContact'}:</Typography>
           <Typography>{`Email : ${props.data.Email}\n Contact : ${props.data.Contact_Number}`}
         </Typography>
         </Box>
        </CardContent>
      </Collapse>
     
    </Card>
  );
}
