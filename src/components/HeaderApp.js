import React from 'react';
import { _abrevName } from '../helpers/scripts'

// Components
import { 
  Grid, Container, Avatar, Typography, Toolbar, AppBar, useMediaQuery, useTheme, makeStyles
} from '@material-ui/core';

// Assets
import image from '../assets/images/logo-venturus-250.png'

// Styles
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, rgba(193,15,79,1) 0%, rgba(165,23,95,1) 42%, rgba(139,32,111,1) 100%)',
    color: 'white',
  },
  label: {
    textTransform: 'capitalize',
  },
  white: {
    color: 'black',
    backgroundColor: 'white',
    fontWeight: 'bold'
  },
  small: {
    width: '100px',
    height: '100px',
  },
});

export default () => {
  const classes = useStyles();
  
  return (
    <div>
      <AppBar position="static" classes={{ root: classes.root }}>
        <Toolbar variant="dense">
          <Container maxWidth={false}>
            <Grid container direction="row" justify="space-between">
              
              {/* Logo and title */}
              <Grid item>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                  <Avatar alt="Venturus" src={image} style={{ marginRight: '0.7em' }} />
                  <Typography>
                    Squad Management Tool
                  </Typography>
                </div>
              </Grid>
              
              {/* User */}
              <Grid item>
                <UserInfo />
              </Grid>

            </Grid>
          </Container>
         
          
        </Toolbar>
      </AppBar>
    </div>
  )
}



function UserInfo () {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const user = {
    name: 'Jhon Doe'
  }

  if (!matches) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Avatar className={classes.small} className={classes.white}>{ _abrevName(user.name) }</Avatar>           
      </div>
    )
  }
  else {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <p style={{ marginRight: '0.7em' }}>{user.name}</p>
        <Avatar className={classes.white}>{ _abrevName(user.name) }</Avatar>           
      </div>
    )
  }
}