import React from 'react';
import { makeStyles, Button, Icon, Menu, MenuItem, Snackbar } from '@material-ui/core';
import { _abrevName } from '../../helpers/scripts'
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import store from '../../store/index'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default props => {
  const { handler } = props
  const classes = useStyles();
  const [teams, setTeams] = store('teams')
  const [form, setForm] = store('form')
  const history = useHistory()

  const [openError, setOpenError] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);

  let prefix = 'f' + form.formation.replace('-', '')

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenError(false);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  const validation = () => {
    let val = {
      errorName: false,
      errorDescription: false,
      errorWebSite: false,
      errorType: false,
      errorSquad: false,
    }
  
    if (form.name == '') val.errorName = true
    if (form.description == '') val.errorDescription = true
    if (form.website == '') val.errorWebSite = true
    if (form.type == '') val.errorType = true
    if (form.squad.filter(e => e == null).length > 0) val.errorSquad = true
  
    setForm({ ...form, ['validation']: val });
  
    return Object.keys(val).filter(e => val[e]).length > 0 ? false : true
  }
  
  const save = () => {
    
    if (validation()) {
  
      let team = {
        name: form.name,
        description: form.description,
        website: form.website,
        type: form.type,
        tags: form.tags,
        squad: form.squad,
        formation: form.formation,
      }
  
      setTeams([...teams, team]);
      setOpenSuccess(true);
      history.push('/')
    } 
    else {
      setOpenError(true)
    }
  }

  return (
    <div style={{ width: '100%' }}>
      <div class="view">
        <div class="comparative-line-2"></div>
        <div class="comparative-circle-2"></div>
        <div class="comparative-circle-mini-2"></div>

        {
          form.squad.map((e, i) => (
            <PositionSelect handler={handler}  classes={classes} prefix={prefix} index={i} data={e}></PositionSelect>
          ))
        }
      </div>
      <Button className={classes.save} onClick={() => save()}>Save</Button>

      <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error">
          Invalid data, try again! 
        </Alert>
      </Snackbar>
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your team registration has been successfully
        </Alert>
      </Snackbar>
    </div>
  )
}

function PositionSelect (props) {
  const { data, prefix, index, handler } = props
  const [values, setValues] = store('data')

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
    <div class={`${_class} pos-base`} alt={data !== null ? data.name : ''}> 
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
          values.players.map(player => (
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