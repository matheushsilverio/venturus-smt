import React from "react";

import { 
  Card, makeStyles
} from '@material-ui/core';

// Styles
const useStyles = makeStyles({
  cardComparative: {
    borderRadius: '7px',
    background: 'linear-gradient(180deg, rgba(186,61,123,1) 10%, rgba(130,51,129,1) 100%)',
    padding: '2em',
    height: '250px',
    position: 'relative',
    overflow: 'hidden'
  },
  side: {
    position: 'relative',
    height: '100%',
    width: '50%',
    float: 'left'
  },
  playerBoxContent: {
    position: 'relative'
  },
  playerImage: {
    position: 'absolute',
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    backgroundColor: 'white',
    top: '50%',
    left: '45%',
    transform: "translate(-50%, 30%)",
    border: '5px solid pink',
    zIndex: 3,
    '&:after': {
      content: `''`,
      position: 'absolute',
      height: '170px',
      width: '170px',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      border: '3px dashed white',
      top: '50%',
      left: '50%',
      transform: "translate(-50%, -50%)",
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
  }
})


export default props => {
  const { classes } = props
  const _classes = useStyles();
  
  return (
    <Card elevation={1} className={_classes.cardComparative}>
      <div class="comparative-line"></div>
      <div class="comparative-circle"></div>
      <div class="comparative-circle-mini"></div>

      <div className={_classes.side}>
        <div className={_classes.playerBoxContent}>
          <label className={_classes.playerLabel}>Most picked player</label>
          <div className={_classes.playerImage}></div>
        </div>
      </div>
      
    </Card>
  )
}