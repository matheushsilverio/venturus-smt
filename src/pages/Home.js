import React from "react";

import { 
  Card, CardHeader, CardContent, makeStyles, Divider, Typography, Button, Icon
} from '@material-ui/core';

import MyTeams from '../components/home/myTeams'
import TopFive from '../components/home/topFive'
import Comparative from '../components/home/comparativeCard'

// Styles
const useStyles = makeStyles({
  cardInfo: {
    borderRadius: '7px'
  },
  cardInfoHeader: {
    padding: '2em'
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
    height: '40px',
    minWidth: '35px',
    color: 'white',
    padding: '0 5px',
    textAlign: 'center',
    boxShadow: '0 5px 7px 5px rgba(169,57,122,0.2)',
  },
})

export default props => {
  const classes = useStyles();

  return (
    <div class="section">
      <div class="columns">
        
        <div class="column">
          <MyTeams classes={classes}></MyTeams>
        </div>

        <div class="column">
          
          <div class="columns is-multiline">
            <div class="column is-full">
              <TopFive classes={classes}></TopFive>
            </div>
            <div class="column is-full">
              <Comparative classes={classes}></Comparative>
            </div>
          </div>

        </div>
      </div>

    </div>
    
  )
}