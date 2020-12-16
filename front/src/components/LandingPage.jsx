import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LandingPageImage1 from '../assets/img/1494649_s.jpg';
import LandingPageImage2 from '../assets/img/132967.jpg';
import { Link } from 'react-router-dom';

const LandingPage = (props) => {
    return(
        <div className="landing-page">
            <div className="landing-page-content1">
                <Typography variant="h4" style={{margin: 20}}>
                    あなたのプログラミング学習をサポート
                </Typography>
                <Typography variant="body1" style={{margin: 20}}>
                    プログラミング学習の内容・目標を管理、記録し
                    日々の学習に役立てよう！
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={{margin: 20}}
                    component={Link} to="/sign_in"
                    >
                    はじめる
                </Button>
            </div>
            <div className="landing-page-image1">
                <img src={LandingPageImage1} alt="image1" width="60%"/>
            </div>
            <div className="landing-page-image2">
                <img src={LandingPageImage2} alt="image2" width="60%"/>
            </div>
            <div className="landing-page-content2">
                <Typography variant="h4" style={{margin: 20}}>
                    学習状況を可視化
                </Typography>
                <Typography variant="body1" style={{margin: 20}}>
                    学習の可視化により、今の自分の現在地を確かめてモチベーションを維持！
                </Typography>
            </div>
            <div className="sign-up-button">
                <Button 
                        variant="contained" 
                        color="primary" 
                        style={{margin: 20}}
                        component={Link} to="/sign_up"
                        >
                        新規登録
                </Button>
            </div>
        </div>
    )
}

export default LandingPage;