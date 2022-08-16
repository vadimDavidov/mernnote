import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Note = (props) => {

    function clickDelete() {
        props.onDelete(props.id);
    }

    function clickUpdate() {
        props.onUpdate(props.id);
    }
    
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <IconButton onClick={clickDelete} style={{color: 'coral'}}><DeleteIcon /></IconButton>
            <IconButton onClick={clickUpdate} style={{color: 'green'}}><EditIcon /></IconButton>
        </div>
    ); 
};

export default Note;