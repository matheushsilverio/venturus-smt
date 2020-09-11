import React from 'react';
import { 
  TextField, withStyles 
} from '@material-ui/core';

const StyledTextField = withStyles({
  root: {
    width: '100%'
  }
})(TextField);


export default props => {
  const { label, id, onchange, multiline } = props

  const handleChange = (event) => {
    onchange(event.target.value);
  }

  return (
    <div class="control-field">
      <label>{label ? label : ''}</label>

      <StyledTextField 
        id={id} 
        multiline={multiline} 
        size="small" 
        rows={multiline ? 4 : 1}  
        variant="outlined"
        onChange={handleChange}
      >
      </StyledTextField>
    </div>
  )
}