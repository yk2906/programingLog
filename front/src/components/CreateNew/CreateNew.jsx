import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Carender from './Carender';
import { StepContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
	}));

  export default function CreateNew(props) {

	const classes = useStyles();
	const [age, setAge] = React.useState('');
	  
	const [content, setContent] = useState([props.initialState])
	const [editLanguage, setEditLanguage] = useState('')
	const [editHour, setEditHour] = useState('')
	const [editMinute, setEditMinute] = useState('')
	const [editDate, setEditDate] = useState('')
	const [editTask, setEditTask] = useState('')
  
    const handleChange = (event) => {
      setAge(event.target.value);
	};

	const inputLanguage = (e) => {
		setEditLanguage(e.target.value)
		console.log(e.target.value)
	}

	const inputHour = (e) => {
		setEditHour(e.target.value)
		console.log(e.target.value)
	}

	const inputMinute = (e) => {
		setEditMinute(e.target.value)
		console.log(e.target.value)
	}

	const inputDate = (e) => {
		setEditDate(e.target.value)
		console.log(e.target.value)
	}

	const inputTask = (e) => {
		setEditTask(e.target.value)
		console.log(e.target.value)
	}
	
	const addContent = () => {
		setContent([...content, {
			language: editLanguage,
			hour: editHour,
			minute: editMinute,
			date: editDate,
			task: editTask
		}])
		setContent('')
	}

    return(
      <div>
				<div>
					<h2>学習言語</h2>
					<FormControl className={classes.formControl}>
						<Select
							value={age}
							onChange={handleChange}
							displayEmpty
							className={classes.selectEmpty}
							inputProps={{ 'aria-label': 'Without label' }}
						>
							{/* <MenuItem value="" disabled>
								Placeholder
							</MenuItem> */}
							<MenuItem value={10}>C</MenuItem>
							<MenuItem value={20}>C++</MenuItem>
							<MenuItem value={30}>C#</MenuItem>
						</Select>
						<FormHelperText>学習言語を選択</FormHelperText>
					</FormControl>
				</div>
				<h2>学習時間</h2>
				<div className="study-time-create-new">
					<TextField 
						id="outlined-basic" 
						variant="outlined" 
						type="number" 
						onChange={inputHour}
						value={editHour} 
					/>
					<h3>時間</h3>
					<TextField 
						id="outlined-basic" 
						variant="outlined" 
						type="number"
						onChange={inputMinute}
						value={editMinute}
					 />
					<h3>分</h3>
					<h3>日付</h3>
					<Carender />
				</div>
				<h2>タスク</h2>
				<div className="task-create-new">
					<div className="task-create-new-textfield">
						<TextField 
							id="outlined-basic" 
							variant="outlined" 
							fullWidth="true" 
							onChange={inputTask}
							value={editTask} 
						/>
					</div>
					<div className="task-create-new-button">
						<Button
							variant="contained"
							color="primary"
							className={classes.button}
							endIcon={<AddIcon />}
							onClick={addContent}
						>
							追加
						</Button>
					</div>
				</div>
				<div className="complete-button">
					<Button variant="contained" size="large" color="primary" className={classes.margin}>
						完了
					</Button>
				</div>
      </div>
    )
}
