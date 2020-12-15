import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputedTextField from './InputedTextField';
import Button from '@material-ui/core/Button';
import EditForm from './EditForm';

const MyPage = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false);
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
			<div className="inputed-text-field">
				<InputedTextField title={"プロフィール"} text={"こんにちは。最近プログラミングの勉強をはじめました。よろしくお願いします。"} />
				<InputedTextField title={"学習データ"} text={"テキスト2"}/>
				<InputedTextField title={"他サイト・サービスのリンク"} text={"テキスト3"} />
			</div>
			<div className="edit-button">
				<Button variant="contained" color="primary" disableElevation onClick={handleClickOpen}>
					編集する
				</Button>
			</div>	
			<EditForm open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
		</div>
	)
}

export default MyPage;