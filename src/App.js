import React from 'react';
import './App.css';
import ResponsiveDrawer from './Mui/Sidebar';
import Dashboard from './Components/Dashboard';
import Comp from './Components/Components';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import { Box } from '@mui/material';

import Charts from './Components/Charts';
import Login from './Components/LoginPage';
import Utilities from './Components/Utilities';


function App() {

  return (
    <Box>
    
      
      

<Switch>
       
        <Route exact path="/">
        <Dashboard />
        </Route>

    

        <Route path="/components">
        <Comp />
        </Route>

        <Route path="/utilities">
        <Utilities />
        </Route>

        <Route path="/login">
        <Login />
        </Route>

        <Route path="/charts">
        <Charts />
        </Route>

      </Switch>
      {/* <Switch>

      <Route exact path="/">
             
        <Dashboard
          
        />
      </Route>

      <Route path="/components">
        <Components
          
        />
      </Route>

    </Switch> */}

    
    </Box>
  );
}

export default App;
