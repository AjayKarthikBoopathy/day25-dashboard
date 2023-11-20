import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Login() {
  const history = useHistory();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
    <Box sx={{ display: 'flex', flexDirection: 'row', height: 270, width: 540, margin: 20, gap: 3, backgroundColor: 'lightBlue', justifyContent: 'center',borderRadius: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            
          }}
          alt="The house from the offer."
          //src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          src="https://images.unsplash.com/photo-1611003228941-98852ba62227?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
        />

      </Box>
      <Box>
        <Typography sx={{ textAlign: 'center', mt:2, mb:2}}>Login Page</Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5 }}>
          <TextField
            id="outlined-password-input"
            label="Username"

            autoComplete="current-password"
          />

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

        <Button sx={{backgroundColor: '#1976d2', color: 'yellow'}} onClick={() => history.push("/")}>
          Submit
        </Button>

        <Button sx={{backgroundColor: 'brown', color: 'yellow'}} onClick={() => history.push("/")}>
          Dashboard
        </Button>

        </Box>

        


      </Box>

    </Box>
    </Box>
  );
}