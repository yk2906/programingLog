import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
    
    
const Tasks = () => {

  const initialState = {
    title: '',
    doing: false,
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
    }])
    setTaskName('')
  }

  return(
    <div>
      <div>
        {tasks.map(value => (
          <li>{value.title}</li>
        ))}
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