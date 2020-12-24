import React, { useState } from 'react';
import BookMark from './BookMark'
import Button from '@material-ui/core/Button';
import BookMarkEditForm from './BookMarkEditForm'

const BookMarks = () => {

    const initialState = {
        title: '',
        tag: '',
        url: '',
        delete: ''
    }

    const [open, setOpen] = useState(false)
    const [bookMark, setBookMark] = useState([initialState])
    const [editTitle, setEditTitle] = useState('')
    const [editTag, setEditTag] = useState('')
    const [editUrl, setEditUrl] = useState('')
    const [editDelete, setEditDelete] = useState('')

    const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false);
    };
    

    const inputTitle = (e) => {
        setEditTitle(e.target.value)
    }

    const inputTag = (e) => {
        setEditTitle(e.target.value)
    }

    const inputUrl = (e) => {
        setEditTitle(e.target.value)
    }

    const inputDelete = (e) => {
        setEditTitle(e.target.value)
    }

    const addBookMark = () => {
        setBookMark([...bookMark, {
            title: editTitle,
            tag: editTag,
            url: editUrl,
            delete: editDelete
        }])
        setEditTitle('')
        setEditTag('')
        setEditUrl('')
        setEditDelete('')
        return handleClose()
    }

    return(
        <div className="book-mark-area">
            <div>
                {bookMark.map((value, index) => (
                    <BookMark title={value.editTitle} tag={value.editTag} url={value.editUrl} key={index.toString()} />
                ))}
            </div>
            <div className="book-mark-area-button">
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    追加する
                </Button>
            </div>
            <BookMarkEditForm 
                open={open}
				handleClickOpen={handleClickOpen} 
                handleClose={handleClose}
                inputTitle={inputTitle}
                inputTag={inputTag}
                inputUrl={inputUrl}
                addBookMark={addBookMark}
                editTitle={editTitle}
                editTag={editTag}
                editUrl={editUrl}
				 />
        </div>
    )
}

export default BookMarks;