import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import { 
  Card, CardHeader, CardContent, Divider, Typography, RadioGroup, FormControlLabel, Select, Radio, MenuItem
} from '@material-ui/core';

import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.
import SquadView from './SquadView'

export default props => {
  const { classes } = props
  const _classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    description: '',
    website: '',
    type: 'fantasy',
    tags: [],
    search: '',
    squad: [null,null,null,null,null,null,null,null,null,null,null],
    formation: '3-4-3',
    playerBase: [
      { id: 0, name: 'Matheus', age: '20', nacionality: 'Brasil', position: 'cf' },
      { id: 1, name: 'Matheus', age: '20', nacionality: 'Brasil', position: 'mc' },
      { id: 2, name: 'Matheus', age: '20', nacionality: 'Brasil', position: 'cb' }
    ],
    players: [
      { id: 0, name: 'Matheus', age: '20', nacionality: 'Brasil', position: 'cf' },
      { id: 1, name: 'Matheus', age: '20', nacionality: 'Brasil', position: 'mc' },
      { id: 2, name: 'Matheus', age: '20', nacionality: 'Brasil', position: 'cb' }
    ]
  });

  const _formations = ['3-2-2-3','3-2-3-2','3-4-3','3-5-2','4-2-3-1','4-3-1-2','4-3-3','4-4-2','4-5-1','5-4-1']

  const handleChange = (prop) => (event) => {
    if (prop === 'tags') {
      setValues({ ...values, [prop]: event });
    }
    if (prop === 'formation') {
      setValues({ ...values, [prop]: event.target.value });
      setValues({ ...values, ['squad']: [null,null,null,null,null,null,null,null,null,null,null] });
    }
    else {
      setValues({ ...values, [prop]: event.target.value });
    }
  };
  const handlerValuesChanges = (value, index) => {
    setValues({ ...values, ['players']: values.playerBase.filter(e => e.id != value.id ) });
    
    let aux = [...values.squad]
    aux[index] = value
    setValues({ ...values, ['squad']: aux });
  }
  const removeTag = (event) => {
    setValues({ ...values, ['tags']: values.tags.filter(e => e !== event) });
  }

  return (
    <Card elevation={1} className={classes.cardInfo}>
      <CardHeader className={classes.cardInfoHeader}
        title={
          <Typography variant="h5" className={classes.titleCards}>
            Create your team
          </Typography>
        }
      />
      <Divider />
      <CardContent>
        <div class="container">
          <h6 className={_classes.titleGroups}>Team Information</h6>
          <div class="columns is-variable is-8">
            <div class="column">
              <div>
      
                <div>
                  <FormControl fullWidth className={_classes.margin} variant="outlined" size="small">
                    <label className={_classes.label}>Team name</label>
                    <OutlinedInput
                      id="team-name"
                      value={values.name}
                      onChange={handleChange('name')}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth className={_classes.margin} variant="outlined" size="small">
                    <label className={_classes.label}>Team description</label>
                    <OutlinedInput
                      multiline rows={10}
                      id="team-description"
                      value={values.description}
                      onChange={handleChange('description')}
                      
                    />
                  </FormControl>
                </div>
              </div>

            </div>
            <div class="column">
              <div>
                <div>
                    <FormControl fullWidth className={_classes.margin} variant="outlined" size="small">
                      <label className={_classes.label}>Team website</label>
                      <OutlinedInput
                        id="team-name"
                        value={values.website}
                        onChange={handleChange('website')}
                        
                      />
                    </FormControl>
                  </div>
                  <div>
                  <FormControl fullWidth className={_classes.margin} style={{ marginTop: '1.5em' }}>
                    <label className={_classes.label}>Team type</label>
                    <RadioGroup aria-label="quiz" name="quiz" onChange={handleChange('type')} value={values.type} className={_classes.formControlLabel}>
                      <FormControlLabel value="real" control={<Radio />} label="Real" disabled />
                      <FormControlLabel value="fantasy" control={<Radio />} label="Fantasy" />
                    </RadioGroup>
                  </FormControl>
                  </div>
                  <div>
                    <FormControl fullWidth className={_classes.margin} variant="outlined" size="small">
                      <label className={_classes.label}>Team tags</label>
                      <TagsInput 
                        className={_classes.tags} 
                        addKeys={[9,13,186]} 
                        value={values.tags} 
                        onRemove={removeTag}
                        tagProps={{ className: _classes.spanTag, classNameRemove: _classes.spanTagRemove }} 
                        onChange={handleChange('tags')} />
                    </FormControl>
                  </div>
              </div>
            </div>
          </div>

          <h6 className={_classes.titleGroups}>Configure Squad</h6>
          <div class="columns is-variable is-8">
            <div class="column">
              <div>
                <FormControl style={{ width: '150px' }} className={_classes.controlLabelHor} variant="outlined" size="small">
                  <label className={_classes.label} style={{ marginRight: '10px' }}>Formation</label>
                  <Select
                    id="formation"
                    value={values.formation}
                    onChange={handleChange('formation')}
                  >
                    {
                      _formations.map(e => (
                        <MenuItem value={e}>{e}</MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
              </div>

              {/* campo */}
              <SquadView handler={handlerValuesChanges} playerBase={values.players} formation={values.formation} squad={values.squad}></SquadView>
            </div>
            <div class="column">
              <div>
                <div>
                  <FormControl fullWidth className={_classes.margin} variant="outlined" size="small">
                    <label className={_classes.label}>Search players</label>
                    <OutlinedInput
                      id="search-players"
                      value={values.search}
                      onChange={handleChange('search')}
                    />
                  </FormControl>
                </div>
              </div>
              <div>
                <FormControl fullWidth className={_classes.margin} style={{ borderBottom: '2px solid #EAEAEA' }}>
                  {
                    values.players.map(e => (
                      <RowPLayer classes={_classes} player={e}></RowPLayer>
                    ))
                  }
                </FormControl>
                
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RowPLayer (props) {
  const { classes, player } = props

  return (
    <div className={classes.boxPlayers}>
      <div>
        <div>
          <label className={classes.boxPlayersLabel}>Name:</label>
          <span className={classes.boxPlayersSpan}>{ player.name }</span>
        </div>
        <div>
          <label className={classes.boxPlayersLabel}>Nacionality:</label>
          <span className={classes.boxPlayersSpan}>{ player.nacionality }</span>
        </div>
      </div>
      <div>
        <div>
          <label className={classes.boxPlayersLabel}>Age:</label>
          <span className={classes.boxPlayersSpan}>{ player.age }</span>
        </div>
        <div>
          <label className={classes.boxPlayersLabel}>Position:</label>
          <span className={classes.boxPlayersSpan} style={{ textTransform: 'uppercase' }}>{ player.position }</span>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    marginBottom: '2em',
  },
  controlLabelHor: {
    margin: theme.spacing(1),
    display: 'inline',
    marginBottom: '2em',
  },
  titleGroups: {
    color: 'rgba(0,0,0,0.3)',
    textTransform: 'uppercase',
    fontSize: '1.2em',
    textAlign: 'center'
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '.25em'
  },
  tags: {
    borderRadius: '4px',
    border: '1px solid rgba(0,0,0,0.23)',
    padding: '10.5px 14px',
    minHeight: '63px',
    display: 'block',
    '&:focus': {
      borderColor: 'rgb(77, 21, 76)'
    }
  },
  spanTag: {
    backgroundColor: 'rgb(223, 50, 136)',
    borderRadius: '20px',
    color: 'white',
    display: 'inline-block',
    fontSize: '13px',
    fontWeight: '400',
    marginBottom: '5px',
    marginRight: '5px',
    padding: '2px 10px 2px 15px',
  },
  spanTagRemove: {
    cursor: 'pointer',
    paddingLeft: '10px',
    '&:before': {
      content: `'x'`,
    }
  },
  formControlLabel: {
    display: 'inline-block',
  },
  boxPlayers: {
    position: 'relative',
    background: 'linear-gradient(180deg, rgb(255, 255, 255) 10%, rgb(240, 240, 240) 100%)',
    padding: '1.5em 3em 1.5em 1.5em',
    borderRadius: '4px',
    margin: '.5em 0',
    display: 'flex',
    justifyContent: 'space-between',
    '&:after': {
      content: `''`,
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '4px',
      top: 0,
      left: 0,
      backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%23EAEAEAFF' stroke-width='4' stroke-dasharray='10%2c 12%2c 10' stroke-dashoffset='18' stroke-linecap='square'/%3e%3c/svg%3e")`,
    }
  },
  boxPlayersLabel: {
    fontWeight: '600',
    marginRight: '.25em'
  },
  boxPlayersSpan: {
    fontWeight: '600',
    color: 'rgb(206, 58, 132)'
  }
}));
