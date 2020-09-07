import React from "react";
import { 
  Grid, Container, Card, CardHeader, CardContent, makeStyles, Divider, Typography, Button, Icon 
} from '@material-ui/core';

import TableApp from '../components/TableApp2'

// Styles
const useStyles = makeStyles({
  cardInfo: {
    borderRadius: '7px'
  },
  cardComparative: {
    borderRadius: '7px',
    background: 'linear-gradient(180deg, rgba(186,61,123,1) 30%, rgba(130,51,129,1) 100%)',
    height: '550px',
  },
  cardInfoHeader: {
    // padding: '2em 2em'
  },  
  titleCards: {
    color: '#823381',
    fontWeight: 'bold'
  },
  root: {
    background: 'linear-gradient(180deg, rgba(186,61,123,1) 0%, rgba(130,51,129,1) 100%)',
    borderRadius: 10,
    borderColor: 'transparent',
    border: 'none',
    height: '45px',
    minWidth: '37px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 5px 7px 5px rgba(169,57,122,0.2)',
  },
  
})


export default props => {
  const classes = useStyles();

  return (
    <div class="vp-content">
      {/* <Container maxWidth={false}> */}
        <Grid spacing={6} container sm={12}>  
          
          <Grid item md={6} sm={12}>
            <Card elevation={1} className={classes.cardInfo}>
              b
              {/* <CardHeader className={classes.cardInfoHeader}
                title={
                  <Typography variant="h5" className={classes.titleCards}>
                    My Teams
                  </Typography>
                }
                action={
                  <Button
                    classes={{ root: classes.root }}
                   >
                    <Icon style={{ fontSize: 30 }}>add</Icon> 
                  </Button>
                }
              />
              <Divider />
              <CardContent>
                <TableApp></TableApp>
              </CardContent> */}
            </Card>
          </Grid>


          <Grid item md={6} sm={12}>
            <Grid item sm={12}>
              <Card elevation={1} className={classes.cardInfo}>
                <CardHeader>

                </CardHeader>
                <Divider />
                <CardContent>
                  A
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} style={{ marginTop: '1.5em' }}>
              <Card elevation={1} className={classes.cardComparative}>
                a
              </Card>
            </Grid>
            
          </Grid>
        
        </Grid>
      {/* </Container> */}
    </div>
  )
}