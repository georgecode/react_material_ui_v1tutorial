import React from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab"
import Paper from '@material-ui/core/Paper';


export default ({muscles, category, onSelect}) => {
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0

  const onIndexSelect = (e,index) =>{
          onSelect(index === 0 ? '': muscles[index - 1])
       }

return <Paper>
     <Tabs
       value ={index}
       onChange={onIndexSelect}
       indicatorColor="primary"
       textColor="primary"
       centered
     >
     <Tab label="All"/>
      {muscles.map((muscleGroup)=>
         <Tab key={muscleGroup} label={muscleGroup} />
        )}
     </Tabs>
   </Paper>
}

//4:40  	