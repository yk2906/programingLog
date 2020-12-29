import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import JavaScriptLogo from '../../assets/img/javascript.svg';
import CompletingGraph from './CompletingGraph';
import CardActionArea from '@material-ui/core/CardActionArea';
import { BrowserRouter as Router, useHistory,withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


const CardList = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const hancleLink = path => history.push(path);
  return (
    <Card className={classes.root} onClick={() => hancleLink(`/status`)}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar variant="square" alt="icon" src={JavaScriptLogo}>
            </Avatar>
          }
          title={
            <Typography variant="h5"　align="left">
              JavaScript
            </Typography>}
        />
        <CardContent>
            <h2>学習時間</h2>
            <div className="study-time">
              <h3>今日</h3>
              <h3>今月</h3>
              <h3>合計</h3>
              <p>1h</p>
              <p>1h</p>
              <p>1h</p>
            </div>
            <h2>未達成タスク</h2>
            <div className="imcomplet-task">
              <p>配列、for文を勉強する</p>
              <p>非同期処理を勉強する</p>
              <p>関数を実装する</p>
            </div>
            <h2>達成タスク数</h2>
          <CompletingGraph />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withRouter(CardList)
  

  