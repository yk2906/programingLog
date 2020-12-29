import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import JavaScriptLogo from '../../../assets/img/javascript.svg'
import CompletingGraph from '../CompletingGraph';
import CardActionArea from '@material-ui/core/CardActionArea';
import { red } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import Tasks from './Tasks';
import BookMarks from './BookMarks';
import Carender from '../../CreateNew/Carender';
import TextField from '@material-ui/core/TextField'

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

export default function Status() {
  const classes = useStyles();

  return (
    <div className="status">
    <Card className={classes.root} style={{maxWidth: "none"}}>
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
          <div className="status-study-time">
            <h3>学習時間を記録する</h3>
            <Carender />
            <div className="status-study-time-input-area">
              <TextField id="outlined-basic" variant="outlined" type="number" />
              <h3>時間</h3>
              <TextField id="outlined-basic" variant="outlined" type="number" />
              <h3>分</h3>
            </div>
            <div className="status-study-time-record">
              <h3>今日の学習時間</h3>
              <h3>今月の学習時間</h3>
              <h3>累計学習時間</h3>
              <h3>1時間</h3>
              <h3>1時間</h3>
              <h3>1時間</h3>
            </div>
          </div>
          <Divider />
          <h2>未達成タスク</h2>
            <div>
              <Tasks />
            </div>
            <Divider />
          <h2>達成タスク数</h2>
            <div className="completing-graph">
              <CompletingGraph />
            </div>
          <Divider />
          <h2>ブックマーク</h2>
            <div>
              <BookMarks />
            </div>
        </CardContent>
    </Card>
    </div>
  );
}