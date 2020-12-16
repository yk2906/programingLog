import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const InputForm = (props) => {
    return(
        <div className="input-form">
            <Typography variant="h6" gutterBottom>
                {props.subtitle}
            </Typography>
            <TextField 
                fullWidth={true} 
                variant={"outlined"} 
                type={props.type}
                margin={"dense"} />
        </div>
    )
}

export default InputForm;