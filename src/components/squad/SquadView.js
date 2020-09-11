import React from 'react';
import { makeStyles, Button, Icon } from '@material-ui/core';
import { _abrevName } from '../../helpers/scripts'

export default props => {
  const { handler, formation, squad } = props
  const classes = useStyles();

  const [values, setValues] = React.useState({
    base: []
  })

  let prefix = 'f' + formation.replace('-', '')

  return (
    <div style={{ width: '100%' }}>
      <div className={classes.view}>
        <div class="comparative-line-2"></div>
        <div class="comparative-circle-2"></div>
        <div class="comparative-circle-mini-2"></div>

        {
          squad.map((e, i) => (
            <PositionSelect classes={classes} prefix={prefix} index={i} data={e}></PositionSelect>
          ))
        }
      </div>
      <Button className={classes.save}>Save</Button>
    </div>
  )
}

function PositionSelect (props) {
  const { data, classes, prefix, index } = props

  let content = <Icon style={{ color: 'white', fontSize: '20px' }}>add</Icon>
  if (data !== null) {
    content = <div>{ _abrevName(data.name) }</div>
  }

  let _class = index == 0 ? `gol` : `f${prefix.replace(/\D/gm, '')}-${index}`

  return (
    <div class={`${_class} pos-base`}> 
      <div className={classes.selector}>
        {content}
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  view: {
    marginTop: '1em',
    position: 'relative',
    width: '100%',
    height: '850px',
    borderRadius: '4px',
    background: 'linear-gradient(180deg, rgba(186,61,123,1) 10%, rgba(130,51,129,1) 100%)'
  },
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
  },
  selector: {
    borderRadius: '50%',
    width: '90px',
    height: '90px',
    position: 'absolute',
    backgroundColor: '#d49cbe',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    // top: '10%',
    // left: '10%',
    border: '1px solid #77245a',
    '&:before': {
      content: `''`,
      position: 'absolute',
      width: '105px',
      height: '105px',
      borderRadius: '50%',
      backgroundColor: 'transparent',
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23B289CAFF' stroke-width='2' stroke-dasharray='8' stroke-dashoffset='28' stroke-linecap='butt'/%3e%3c/svg%3e")`,
    }
  },
  
})