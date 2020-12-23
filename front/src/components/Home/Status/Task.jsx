import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

const Task = (props) => { 
  

  

    return(
        <div>
            <ListItem dense button={props.title !== ''} onClick={props.handleCheckBoxToggle }>
            <ListItemIcon>
                {props.check}
              {/* <Checkbox
                // edge="start"
                // tabIndex={-1}
                // disableRipple
                check={props.check}
              /> */}
            </ListItemIcon>
            <ListItemText primary={props.title} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                {props.delete}
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
    )
}

export default Task;