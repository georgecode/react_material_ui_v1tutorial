import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';


//Instead of useing default imports like below
//You can use the name imports like above

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';

export default props =>
      <AppBar position="static">
        <Toolbar>
        	<Typography variant="headline" color="inherit">
        		headline
      		</Typography>

        </Toolbar>
      </AppBar>