import React from 'react';
import 'semantic-ui-react';
import { Grid } from '@material-ui/core';
// container using material Ui
// container has property 
//'textAlight' - left, right, center, justified

export default function container({ textAlign, collapsed }) {
  const useStyles = {
    root: {
      position: 'absolute',
      top: '10%',
      left: `${!collapsed ? '250px' : '100px'}`,
      background: '#fafafa',
      width: '100%',
      height: '100%',
      zIndex: -1000,
      transition: 'left,0.5s'
    },
    gridContainer: {
      overflowY: 'auto',
      padding:'5%',
    }
  };
  return (
    <div style={useStyles.root}>
      <Grid container alignItems={textAlign ? textAlign : "center"} style={useStyles.gridContainer} spacing={3}>
        <span>dsfdf</span>
      </Grid>
    </div>
  )
}


