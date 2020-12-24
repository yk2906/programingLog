import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';

export default function BookMark() {

  return (
    <Card>
      <div className="book-mark">  
        <div className="book-mark-tag">
          <CardContent>
            <Typography component="h5" variant="h5">
              <Chip label="記事" />
            </Typography>
          </CardContent>
        </div>
        <div className="book-mark-title">
          <CardContent>
            <Typography component="h5" variant="h5">
              非同期処理実装方法について
            </Typography>
          </CardContent>
        </div>
      </div>
          <Divider />
        <div className="book-mark-url">
          <CardContent>
            <Typography component="h5" variant="h5">
              https://qiita.com/kiyodori/items/da434d169755cbb20447
            </Typography>
          </CardContent>
        </div>
    </Card>
  );
}