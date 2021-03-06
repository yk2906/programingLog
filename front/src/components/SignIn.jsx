import React from 'react';
import InputForm from './InputForm';
import Typography from '@material-ui/core/Typography';

const SignIn = () => {
    return(
        <div>
            <Typography variant="h4" gutterBottom>
                ログイン
            </Typography>
            <InputForm subtitle={"メールアドレス"} type={"email"}/>
            <InputForm subtitle={"パスワード"} type={"password"}/>
            <a href="/sign_up">新規登録はこちら</a>
        </div>
    )
}

export default SignIn;