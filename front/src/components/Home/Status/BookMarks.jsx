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
    const [editTag, setEditTag] = useState(["記事", "サイト", "ブログ", "書籍", "その他"])
    const [editUrl, setEditUrl] = useState('')
    const [editDelete, setEditDelete] = useState('')
    const [showFlag, setShowFlag] = useState(false)

    const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false);
    };
    

    const inputTitle = (e) => {
        setEditTitle(e.target.value)
        console.log(e.target.value)
    }

    const inputTag = (e) => {
        setEditTag(e.target.value)
        console.log(e.target.value)
    }

    const inputUrl = (e) => {
        setEditUrl(e.target.value)
        console.log(e.target.value)
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
        setShowFlag(true)
        return handleClose()
    }



    return(
        <div className="book-mark-area">
            {showFlag ? <div>
                {bookMark.map((value, index) => (
                    <BookMark title={value.title}
                              tag={value.tag}
                              url={value.url}
                              key={index.toString()}
                    />
                ))}
            </div> : null}
            
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