import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Carender from './Carender';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
	}));

  export default function CreateNew() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

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
					<TextField id="outlined-basic" variant="outlined" type="number" />
					<h3>時間</h3>
					<TextField id="outlined-basic" variant="outlined" type="number" />
					<h3>分</h3>
					<h3>日付</h3>
					<Carender />
				</div>
				<h2>タスク</h2>
				<div className="task-create-new">
					<TextField id="outlined-basic" variant="outlined" />
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						endIcon={<AddIcon />}
					>
						追加
				</Button>
				</div>
				<div className="complete-button">
					<Button variant="contained" size="large" color="primary" className={classes.margin}>
						完了
					</Button>
				</div>
      </div>
    )
}
