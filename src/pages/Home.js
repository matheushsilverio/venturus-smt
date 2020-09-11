import React from "react";

import { 
  makeStyles
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
    position: 'relative',
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
    position: 'absolute',
    top: '2em',
    right: '2em',
    border: 'none',
    height: '40px',
    minWidth: '35px',
    color: 'white',
    padding: '0 5px',
    textAlign: 'center',
    boxShadow: '0 5px 7px 5px rgba(169,57,122,0.2)',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      top: '1.85em',
      boxShadow: '0 7px 7px 5px rgba(169,57,122,0.4)',
    }
  },
})

export default props => {
  const classes = useStyles();

  return (
    <div class="section">
      <div class="columns is-variable is-4">
        
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