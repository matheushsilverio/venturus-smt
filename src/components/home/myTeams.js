import React, { useState }  from "react";
import { Link } from "react-router-dom";

import { 
  Card, CardHeader, CardContent, makeStyles, Divider, Typography, Button, Icon
} from '@material-ui/core';

import TableApp from '../TableApp2'

// Styles
const useStyles = makeStyles({
  
})

export default props => {
  const { classes } = props
  const _classes = useStyles();

  return (
    <Card elevation={1} className={classes.cardInfo} style={{ height: '100%' }}>
      <CardHeader className={classes.cardInfoHeader}
        title={
          <Typography variant="h5" className={classes.titleCards}>
            My Teams
          </Typography>
        }
        action={
          <Link to="/squad">
            <Button
              classes={{ root: classes.root }}
              >
              <Icon style={{ fontSize: 30 }}>add</Icon> 
            </Button>
          </Link>
        }
      />
      <Divider />
      <CardContent>
        <TableApp></TableApp>
      </CardContent>
    </Card>
  )
}