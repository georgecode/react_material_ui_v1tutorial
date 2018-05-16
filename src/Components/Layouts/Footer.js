import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab"
import Paper from '@material-ui/core/Paper';


export default props =>

   <Paper>
     <Tabs
       value ={0}
       indicatorColor="primary"
       textColor="primary"
       centered
     >
       <Tab label="Item One" />
       <Tab label="Item Two" />
       <Tab label="Item Three" />
     </Tabs>
   </Paper>


//7:00	