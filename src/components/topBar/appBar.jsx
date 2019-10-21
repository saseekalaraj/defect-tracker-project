import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
/* App bar using Material-ui 
* app bar have 3 properties
   ** position - absolute,fixed,relative,static,sticky
   ** color- default,inherit,primary,secondary
   ** backgroundColor - pass any color code without # code
*/
const appBar = ({position,color,backgroundColor}) => {
    return (
        <Fragment>
            <AppBar position={position} color={color} style={{background:`#${backgroundColor}`}}>
                <Toolbar>

                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default appBar
