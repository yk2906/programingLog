import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputEditForm from '../../MyPage/InputEditForm';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BookMarkEditForm(props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">ブックマークに追加</DialogTitle>
        <DialogContent>
          <InputEditForm 
            label={"タイトル"}
            multiline={true}
            rows={6}
            type={"text"}
            value={props.editTitle}
            onChange={props.inputTitle}
          />
          <FormControl variant="outlined" className={classes.formControl} fullWidth="true">
            <InputLabel id="demo-simple-select-outlined-label">タグ</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={props.tag}
              onChange={props.inputTag}
              label="タグ"
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
              <MenuItem value={"記事"}>記事</MenuItem>
              <MenuItem value={"サイト"}>サイト</MenuItem>
              <MenuItem value={"ブログ"}>ブログ</MenuItem>
              <MenuItem value={"書籍"}>書籍</MenuItem>
              <MenuItem value={"その他"}>その他</MenuItem>
            </Select>
          </FormControl>
          <InputEditForm 
            label={"URL"} 
            type={"text"}
            value={props.editUrl}
            onChange={props.inputUrl}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={props.addBookMark} color="primary" autoFocus disabled={(props.editTitle, props.editTag, props.editUrl) === ""}>
            完了
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}