import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import InputedTextField from './InputedTextField';

const MyPage = () => {
    return(
			<div className="mypage">
				<div className="avatar">
					<Avatar 
					alt="picture" 
					src="/static/images/avatar/1.jpg"
					style={{ height: 100, width: 100 }}
					/>
					<InputedTextField />
      	</div>
			</div>
    )
}

export default MyPage;