import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputedTextField from './InputedTextField';
import Button from '@material-ui/core/Button';
import EditForm from './EditForm';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import axios from 'axios'

const MyPage = () => {
	const initialState = {
		profile: '',
		link: ''
	}

	const [open, setOpen] = React.useState(false);
	const [state, setState] = useState({initialState})
	const [editProfile, setEditProfile] = useState('')
	const [editLink, setEditLink] = useState('')

	const inputProfile = (e) => {
		setEditProfile(e.target.value)
	}

	const inputLink = (e) => {
		setEditLink(e.target.value)
	}

	const submitForm = () => {
		setState({
			profile: editProfile,
			link: editLink
		})
		return handleClose()
	}
	

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false);
	};

	const fileInput = React.createRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Selected file - ${fileInput.current.files[0].name}`)
	};
 
	return(
		<div className="mypage">
			<div className="avatar">
				<Avatar
				alt="picture" 
				src="/static/images/avatar/1.jpg"
				style={{ height: 100, width: 100, margin: 'auto' }}
				/>
			</div>
			<div className="photo-icon">
				<form onSubmit={handleSubmit}>
					<input type="file"/>
					<button type="submit"><AddAPhotoIcon /></button>
				</form>
			</div>
			<div className="inputed-text-field">
				<InputedTextField title={"プロフィール"} profile={state.profile} />
				<InputedTextField title={"学習データ"} text={"テキスト2"}/>
				<InputedTextField title={"他サイト・サービスのリンク"} link={state.link} />
				
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
				inputProfileEdit={inputProfile}
				inputLinkEdit={inputLink}
				handleEditFormClose={handleClose}
				submitForm={submitForm}
				editProfile={editProfile}
				editLink={editLink} />
		</div>
	)
}

export default MyPage;