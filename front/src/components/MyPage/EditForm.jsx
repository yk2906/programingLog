import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputEditForm from './InputEditForm';

export default function EditForm(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">マイページを編集</DialogTitle>
        <DialogContent>
          <InputEditForm 
            label={"プロフィール"}
            multiline={true}
            rows={6}
            type={"text"}
            value={props.value}
            onChange={props.inputProfileEdit}
          />
          <InputEditForm 
            label={"他サイト・サービスのリンク"} 
            type={"text"}
            value={props.value}
            onChange={props.inputLinkEdit}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={props.submitForm} color="primary" autoFocus>
            完了
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}