import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Icon, Button, Divider, Avatar, Badge } from 'antd';


/* App bar using Material-ui 
* app bar have 3 properties
   ** position - absolute,fixed,relative,static,sticky
   ** color- default,inherit,primary,secondary
   ** backgroundColor - pass any color code without # code
   **iconFontColor - you can change Icon Color
*/

const appBar = ({ position, color, backgroundColor, iconFontColor }) => {
    return (
        <Fragment >
            <AppBar  position={position ? position : 'static'} color={color ? color : 'primary'} style={{ background: `#${backgroundColor}` }}>
                <Toolbar >
                    <Button type="primary" style={{ background: 'transparent', color: `#${iconFontColor ? iconFontColor : 'ed3232'}`, border: 'none', marginRight: 15 }}>
                        <Icon type='menu-fold' />
                    </Button>
                    <Typography variant="h6" color='primary'>
                        Defect-Tracker
                    </Typography>
                    <IconButton style={{ marginLeft: '70%' }}>
                        <Badge count={5}>
                            <Avatar size="small" icon="alert" style={{ color: `#${iconFontColor ? iconFontColor : '048691'}` }} />
                        </Badge>
                    </IconButton>
                    <Divider type="vertical" />
                    <IconButton>
                        <Badge count={5}>
                            <Avatar size="small" icon="message" style={{ color: `#${iconFontColor ? iconFontColor : '048691'}` }} />
                        </Badge>
                    </IconButton>
                    <Divider type="vertical" />
                    <IconButton>
                        <Avatar size="small" icon="logout" style={{ color: `#${iconFontColor ? iconFontColor : '048691'}` }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default appBar
