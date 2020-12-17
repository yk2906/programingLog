import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputEditForm = (props) => {
    return(
        <TextField 
        variant={"outlined"}
        fullWidth={true}
        label={props.label}
        margin={"dense"}
        multiline={props.multiline}
        rows={props.rows}
        type={props.type}
        // value={props.value}
        onChange={props.onChange}
         />
    )
}

export default InputEditForm;