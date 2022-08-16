import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(true);
    }

    const handleAdd = (e) => {
        props.onAdd();
        e.preventDefault();
    }

    return (
        <div>
            <form className='create-note' onSubmit={handleAdd}>
                {isExpanded
                    &&
                    <input
                        onChange={e => props.onChange(prev => { return { ...prev, title: e.target.value } })}
                        placeholder='Title'
                        value={props.title}
                    />
                }   
                <textarea
                    onClick={handleExpanded}
                    onChange={e => props.onChange(prev => {return {...prev, content: e.target.value} })}
                    placeholder={isExpanded ? 'Take a note ...' : 'Click to expand ...'}
                    rows={isExpanded ? '3' : '1'}
                    value={props.content}
                    />
                <Zoom in={isExpanded}>
                    <Fab type='submit'><AddIcon /></Fab>
                </Zoom>
                
            </form>
        </div>
    );
};

export default CreateArea;