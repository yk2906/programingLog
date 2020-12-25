import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete';
import Task from './Task'
import CheckBox from '@material-ui/core/Checkbox'

    
const Tasks = () => {

  const initialState = {
    title: '',
    doing: false,
    delete: ''
  }

  const [tasks, setTasks] = useState([initialState])
  const [taskName, setTaskName] = useState('')

  const inputTaskName = (e) => {
    setTaskName(e.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, {
      title: taskName,
      doing: false,
      check: <CheckBox />,
      delete: <DeleteIcon />
    }])
    setTaskName('')
  }

  const handleCheckBoxToggle = (value) => {
    setTasks(tasks.filter(x => {
      if (x === value) x.doing = !x.doing
      return x
    }))
  }

  return(
    <div>
      <div className="task">
        <List>
            {tasks.map((value, index) => (
              <Task 
                title={value.title} 
                doing={value.doing} 
                delete={value.delete}
                index={index.toString()}
                check={value.check}
                handleCheckBoxToggle={handleCheckBoxToggle} />
            ))}
        </List>
      </div>
      <div className="tasks-input-area">
        <div className="tasks-textfield">
          <TextField 
            id="outlined-search" 
            label="タスクを追加" 
            type="text" 
            variant="outlined" 
            fullWidth="true"
            value={taskName}
            onChange={inputTaskName} 
             />
        </div>
        <div className="tasks-add-button">
          <Button 
            disabled={taskName === ''}
            variant="contained" 
            size="large" 
            color="primary"
            onClick={addTask}
             >
            追加
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Tasks;