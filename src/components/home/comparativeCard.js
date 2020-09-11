import React from "react";
import { _abrevName } from '../../helpers/scripts'

import { 
  Card, makeStyles, Tooltip
} from '@material-ui/core';

export default props => {
  const { classes } = props
  const _classes = useStyles();

  let player = [
    { name: 'Zinedine Zidane', pct: 0.75 },
    { name: 'Neymar', pct: 0.25 }
  ] 
  
  return (
    <Card elevation={1} class="comparative-card">
      <div class="comparative-line"></div>
      <div class="comparative-circle"></div>
      <div class="comparative-circle-mini"></div>

      <div class="comparative-sides">
        <div className={_classes.playerBoxContent}>
          <label className={_classes.playerLabel}>Most picked player</label>
          <div data-image className={_classes.playerImage}>
            { _abrevName(player[0].name) }
          </div>
          <div className={_classes.playerInfo}><b>{ player[0].pct * 100 }</b>%</div>
        </div>
      </div>
      <div class="comparative-sides">
        <div className={_classes.playerBoxContent}>
          <label className={_classes.playerLabel}>Less picked player</label>
          <div data-image className={_classes.playerImage}>
            { _abrevName(player[1].name) }
          </div>
          <div className={_classes.playerInfo}><b>{ player[1].pct * 100 }</b>%</div>
        </div>
      </div>
      
    </Card>
  )
}

// Styles
const useStyles = makeStyles({
  cardComparative: {
    borderRadius: '7px',
    background: 'linear-gradient(180deg, rgba(186,61,123,1) 10%, rgba(130,51,129,1) 100%)',
    padding: '2em',
    height: '600px',
    position: 'relative',
    overflow: 'hidden'
  },
  playerBoxContent: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  playerImageContent: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    overflow: 'hidden'
  },  
  playerImage: {
    position: 'absolute',
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: '3em',
    fontWeight: 'bolder',
    color: 'rgba(186,61,123,1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '45%',
    transform: "translate(-50%, -50%)",
    border: '5px solid #b20692',
    boxShadow: '0px 0px 29px 3px rgba(113,28,139,1)',
    zIndex: 3,
    '&:hover:after': {
      content: `''`,
      transition: 'all .2s',
      position: 'absolute',
      animation: 'rotate 20s linear infinite',
      height: '175px',
      width: '175px',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23B289CAFF' stroke-width='5' stroke-dasharray='13' stroke-dashoffset='28' stroke-linecap='butt'/%3e%3c/svg%3e")`,
      top: '-9%',
      left: '-8%'
    }
  },
  playerLabel: { 
    position: 'absolute',
    fontWeight: 'bolder', 
    fontSize: '1.3em',
    color: 'white',
    top: '0%',
    left: '50%',
    transform: "translate(-50%, 0%)",
  },
  playerInfo: {
    position: 'absolute', 
    fontSize: '1.3em',
    color: 'white',
    top: '20%',
    left: '60%',
    transform: "translate(55%, 10%)",
    '&:after': {
      content: `''`,
      position: 'absolute',
      height: '2px',
      width: '70px',
      backgroundColor: 'white',
      top: '100%',
      left: '0%'
    }
  }
})