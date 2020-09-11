import React from 'react';
import { makeStyles, Button, Icon, Menu, MenuItem } from '@material-ui/core';
import { _abrevName } from '../../helpers/scripts'

export default props => {
  const { handler, formation, squad, playerBase } = props
  const classes = useStyles();

  let prefix = 'f' + formation.replace('-', '')

  return (
    <div style={{ width: '100%' }}>
      <div class="view">
        <div class="comparative-line-2"></div>
        <div class="comparative-circle-2"></div>
        <div class="comparative-circle-mini-2"></div>

        {
          squad.map((e, i) => (
            <PositionSelect handler={handler} playerBase={playerBase} classes={classes} prefix={prefix} index={i} data={e}></PositionSelect>
          ))
        }
      </div>
      <Button className={classes.save}>Save</Button>
    </div>
  )
}

function PositionSelect (props) {
  const { data, prefix, index, playerBase, handler } = props

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (player, index) => {
    handler(player, index)
    setAnchorEl(null);
  };

  let content = <Icon style={{ color: 'white', fontSize: '20px' }}>add</Icon>
  if (data !== null) {
    content = <div>{ _abrevName(data.name) }</div>
  }

  let _class = index == 0 ? `gol` : `f${prefix.replace(/\D/gm, '')}-${index}`

  return (
    <div class={`${_class} pos-base`}> 
      <div onClick={handleClick} class={`selector ${data !== null ? 'selector-full' : ''}`}>
        {content}
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={() => handleClose('', index)}>Profile</MenuItem> */}
        {
          playerBase.map(player => (
            <MenuItem onClick={() => handleClose(player, index)}>{ player.name }</MenuItem>
          ))
          
        }
      </Menu>
    </div>
  )
}

const useStyles = makeStyles({
  save: {
    backgroundColor: 'rgba(130,51,129,1)',
    width: '100%',
    marginTop: '1em',
    borderRadius: '7px',
    padding: '1em',
    cursor: 'pointer',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(186,61,123,1)'
    }
  }
})