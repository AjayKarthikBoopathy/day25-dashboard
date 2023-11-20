import React from 'react';
import ResponsiveDrawer from '../Mui/Sidebar';
import { Badge, Box, CardMedia, IconButton, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "../App.css"




export default function Dash() {

  

  const card = (
    
    <React.Fragment>
      <CardContent>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Earnings{'(Monthly)'}
      </Typography>
      <Typography variant="body2">
        10,000
        
      </Typography>
      </CardContent>
      
    </React.Fragment>
    
  );

  return (
    <Box>
      <ResponsiveDrawer />
    
    <Box className="dashboard">  
    <Typography ml={10} mb={5}  variant="h5" fontWeight={400}>Dashboard</Typography>

    <Box cols={2} sx={{display: 'flex', ml: 10, gap: 4, flexWrap: 'wrap'}}> 

    
      <Card variant="outlined" sx={{ boxShadow: 6 }}>
      <Box sx={{ borderLeft: 2,  borderColor: 'secondary.main' }}>
        {card}
      </Box>
      </Card>
      
      <Card variant="outlined" sx={{ boxShadow: 6 }}>
      <Box sx={{ borderLeft: 2,  borderColor: 'secondary.main' }}>
        {card}
      </Box>
      </Card>

      <Card variant="outlined" sx={{ boxShadow: 6 }}>
      <Box sx={{ borderLeft: 2,  borderColor: 'secondary.main' }}>
        {card}
      </Box>
      </Card>

      <Card variant="outlined" sx={{ boxShadow: 6 }}>
      <Box sx={{ borderLeft: 2,  borderColor: 'secondary.main' }}>
        {card}
      </Box>
      </Card>

      
    </Box>

    <Box>
    <Card sx={{ maxWidth: 400, ml:10, mt:10, mb: 10, mr:10, boxShadow: 6 }}>
      <CardMedia
        component="img"
        alt="nature view"
        
        image="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7394_none-7-1024x690.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Overview
        </Typography>
        <Typography variant="body2" color="text.secondary">
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. 
        Custom CSS classes are used to create custom components and custom utility classes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 400, ml:10, mt:10, mb:10, mr:10, boxShadow: 6 }}>
      <CardMedia
        component="img"
        alt="nature view"
        height="10%"
        image="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7394_none-7-1024x690.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Overview
        </Typography>
        <Typography variant="body2" color="text.secondary">
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. 
        Custom CSS classes are used to create custom components and custom utility classes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </Box>
    
    </Box>

    
    </Box>
    
  );
}


