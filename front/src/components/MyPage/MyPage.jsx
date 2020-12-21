import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputedTextField from './InputedTextField';
import Button from '@material-ui/core/Button';
import EditForm from './EditForm';

const MyPage = () => {
	const [open, setOpen] = React.useState(false);
	const [profile, setProfile] = useState("")
	const [link, setLink] = useState("")

	const inputProfile = (e) => {
		setProfile(e.target.value)
	}

	const inputLink = (e) => {
		setLink(e.target.value)
	}

	const submitForm = (e) => {
		setProfile(e.target.value)
		setLink(e.target.value)
		return handleClose()
	}
	

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false);
	};

	const handleEditFormClose = () => {
		setProfile("")
		setLink("")
	}

 
	return(
		<div className="mypage">
			<div className="avatar">
				<Avatar
				alt="picture" 
				src="/static/images/avatar/1.jpg"
				style={{ height: 100, width: 100, margin: 'auto' }}
				/>
			</div>
			<div className="inputed-text-field">
				<InputedTextField title={"プロフィール"} profile={submitForm} />
				<InputedTextField title={"学習データ"} text={"テキスト2"}/>
				<InputedTextField title={"他サイト・サービスのリンク"} link={submitForm} />
				
			</div>
			<div className="edit-button">
				<Button variant="contained" color="primary" disableElevation onClick={handleClickOpen}>
					編集する
				</Button>
			</div>	
			<EditForm 
				open={open} 
				handleClickOpen={handleClickOpen} 
				handleClose={handleClose}
				inputProfile={inputProfile}
				inputLink={inputLink}
				handleEditFormClose={handleEditFormClose}
				submitForm={submitForm} />
		</div>
	)
}

export default MyPage;