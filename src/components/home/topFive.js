import React from 'react';

import { 
  Card, CardHeader, CardContent, makeStyles, Divider, Typography, Button, Icon
} from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    padding: '.5em'
  },
  subtitle: {
    fontWeight: '600'
  },
  boxContent: {
    borderRadius: '7px',
    padding: '0.25em 0.25em',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: '1em'
  },
  rowBoxContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.5em 1em',
    backgroundColor: 'white',
    borderRadius: '7px',
    border: '2px solid transparent',
    marginTop: '0.25em',
    '&:last-child': {
      marginBottom: '0.25em' 
    },
    '&:hover': {
      borderColor: 'rgba(186,61,123,1)' 
    }
  }
})

const teams = [
  { name: 'Inter', avg: 10 },
  { name: 'Inter', avg: 10 },
  { name: 'Inter', avg: 10 },
  { name: 'Inter', avg: 10 },
  { name: 'Inter', avg: 10 },
]

export default props => {
  const { classes } = props
  const _classes = useStyles()

  return (
    <Card elevation={1} className={classes.cardInfo}>
      <CardHeader className={classes.cardInfoHeader}
        title={
          <Typography variant="h5" className={classes.titleCards}>
            Top 5
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <div className={_classes.content}>
          <div class="columns is-mobile">
            <div class="column">
              <label className={_classes.subtitle}>Highest avg age</label>
              <div className={_classes.boxContent}>
                {
                  teams.map(e => (
                    <RowBoxContent classes={_classes} team={e} ></RowBoxContent>
                  ))
                } 
              </div>
            </div>
            <div class="column">
              <label className={_classes.subtitle}>Lowest avg age</label>
              <div className={_classes.boxContent}>
                {
                  teams.map(e => (
                    <RowBoxContent classes={_classes} team={e} ></RowBoxContent>
                  ))
                } 
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


function RowBoxContent (props) {
  const { team, classes } = props

  return (
    <div className={classes.rowBoxContent}>
      <div>{team.name ? team.name : '-'}</div>
      <div style={{ fontWeight: 'bold' }}>{
        typeof team.avg === 'number' ? team.avg.toFixed(1) : '-'
      }</div>
    </div>
  )
}