import React, { useState, useEffect } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import axios from 'axios';
import UpdateForm from "./UpdateForm";
import Footer from "./Footer";

function App() {
  const [note, setNote] = useState({ title: '', content: '' });
  const [notes, setNotes] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updatingText, setUpdatingText] = useState({ title: '', content: '' });

  // Add a note to list of notes
  const addNote = async () => {
    try {
      // for dev
      // const res = await axios.post('http://localhost:5500/api/note',
      // for prod
      const res = await axios.post('https://mernnote.herokuapp.com/api/note',
        { title: note.title, content: note.content });
      setNotes(prev => [...prev, res.data]);
      setNote({ title: '', content: '' });
    } catch (error) {
      console.log(error);
    }
  };

  // Get list of notes
  useEffect(() => {
    const getNotesList = async () => {
      try {
        // for dev
        // const res = await axios.get('http://localhost:5500/api/notes');
        // for prod
        const res = await axios.get('https://mernnote.herokuapp.com/api/notes');
        setNotes(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotesList();
  }, []);
  
  // Delete a note from list of notes
  const deleteNote = async (id) => {
    try {
      // for dev
      // await axios.delete(`http://localhost:5500/api/note/${id}`);
      // for prod
      await axios.delete(`https://mernnote.herokuapp.com/api/note/${id}`);
      const newLisOfNotes = notes.filter(item => { return item._id !== id });
      setNotes(newLisOfNotes);
    } catch (error) {
      console.log(error);
    }
  }

  // Render update-form first
  // Update a note
  const updateNote = async () => {
    // for dev
    // const res = await axios.put(`http://localhost:5500/api/note/${isUpdating}`,
    // for prod
    const res = await axios.put(`https://mernnote.herokuapp.com/api/note/${isUpdating}`,
      { title: updatingText.title, content: updatingText.content });
    console.log(res.data);
    const updatedItemIndex = notes.findIndex(item => item._id === isUpdating);
    notes[updatedItemIndex] = { title: updatingText.title, content: updatingText.content };
    setUpdatingText({ title: '', content: '' });
    setIsUpdating('');
  }
   
  return (
    <div className="App">
      <CreateArea onChange={setNote} title={note.title} content={note.content} onAdd={addNote} />
      {notes.map(item => {
        return (
          <div key={item._id}>
            {
              isUpdating === item._id
                ?
                <UpdateForm
                  id={item._id}
                  title={updatingText.title}
                  content={updatingText.content}
                  onUpdate={setUpdatingText}
                  onSubmit={updateNote}
                />
                :
                <div key={item._id}>
                  <Note
                    id={item._id}
                    title={item.title}
                    content={item.content}
                    onDelete={deleteNote}
                    onUpdate={() => { setIsUpdating(item._id) }}
                  />
                  <Footer />
                </div>
            }
          </div>
          
        );
      })}
    </div>
  );
}

export default App;
