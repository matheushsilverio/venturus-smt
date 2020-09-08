import React from "react";

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
      </CardContent>
    </Card>
  )
}