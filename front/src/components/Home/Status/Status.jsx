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
import Tasks from './Tasks';
import BookMarks from './BookMarks';

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
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <h3>学習時間</h3>
          </Typography>
            <div></div>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <h3>未達成タスク</h3>
          </Typography>
            <div>
              <Tasks />
            </div>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <h3>達成タスク数</h3>
          </Typography>
          <div className="completing-graph">
            <CompletingGraph />
          </div>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <h3>ブックマーク</h3>
          </Typography>
            <div>
              <BookMarks />
            </div>
        </CardContent>
    </Card>
    </div>
  );
}