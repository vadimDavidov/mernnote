import React from 'react';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';

const UpdateForm = (props) => {

    function handleSubmit(e) {
        props.onSubmit();
        e.preventDefault();
    }

    return (
        <form className="update-note" onSubmit={handleSubmit}>
            <input
                onChange={e => { props.onUpdate(prev => { return { ...prev, title: e.target.value } }) }}
                name='title'
                value={props.title}
            />
            <textarea
                onChange={e => { props.onUpdate(prev => { return { ...prev, content: e.target.value } }) }}
                name='content'
                value={props.content}
            />
            <IconButton type='submit'><CheckIcon /></IconButton>
            
        </form>
    );
};

export default UpdateForm;