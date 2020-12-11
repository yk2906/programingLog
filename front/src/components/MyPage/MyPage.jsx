import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputedTextField from './InputedTextField';
import Button from '@material-ui/core/Button';

const MyPage = () => {
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
				<Button variant="contained" color="primary" disableElevation>
					編集する
				</Button>
			</div>	
		</div>
	)
}

export default MyPage;