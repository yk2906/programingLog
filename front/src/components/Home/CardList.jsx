import React from 'react';
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

export default function CardList() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar variant="square" alt="icon" src={JavaScriptLogo}>
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          //}
          title={
            <Typography variant="h5"　align="left">
              JavaScript
            </Typography>}
        />
        <CardContent>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <h3>学習時間</h3>
            <div className="study-time">
              <h4>今日</h4>
              <h4>今月</h4>
              <h4>合計</h4>
              <p>1h</p>
              <p>1h</p>
              <p>1h</p>
            </div>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <h3>未達成タスク</h3>
            <div className="imcomplet-task">
              <p>配列、for文を勉強する</p>
              <p>非同期処理を勉強する</p>
              <p>関数を実装する</p>
            </div>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            <h3>達成タスク数</h3>
          </Typography>
          <CompletingGraph />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}