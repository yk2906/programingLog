import React from 'react';
import InputForm from './InputForm';
import Typography from '@material-ui/core/Typography';

const SignUp = () => {
    return(
        <div>
            <Typography variant="h4" gutterBottom>
                新規登録
            </Typography>
            <InputForm subtitle={"ユーザー名"} type={"text"} />
            <InputForm subtitle={"メールアドレス"} type={"email"} />
            <InputForm subtitle={"パスワード"} type={"password"} />
            <InputForm subtitle={"パスワード（確認）"} type={"password"} />
        </div>
    )
}

export default SignUp;