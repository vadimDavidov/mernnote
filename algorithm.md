1. Clean react from redundant elements.
2. Create component folder for files with separate components.
3. Create 'CreateArea' component and organise some elements inside.
4. Create other components as needed.
5. Style the components.
* Use material-ua: 'https://mui.com/material-ui/getting-started/overview/' for styling some elements.
6. Make input-fields usable in 'input' & 'textarea' elements:
    - put 'name' attribute with appropriate property in 'input' and 'textarea' elements;
    - put 'onChange' attribute and add the function as property, in 'input' & 'textarea' elements to handle change input events;
    - put 'value' attribute with the properties in 'input' & 'textarea' elements;
7. Add (post) new note to database in 'CreateArea' component: 
    - install 'axios' in 'client' folder & import it in 'CreateArea' component;
    - in 'App.jsx' component create 'addNote' async-await function with two functions inside:
        - first simple 'setNotes' function to show notes array with new note;
        - second 'await axios.post' function to add and save function in db;
    - in 'App.jsx' component, inside of '<CreateArea />' element, create 'onAdd' attribute & pass there reference on 'onAdd'
     function as the property;
    -  in 'CreateArea' component create 'submitNote' function where pass reference on 'onAdd' attribute with a 'props', set note to initial values & apply preventDefault() function;
    - put 'onClick' attribute with the property 'submitNote' reference in 'button' element of 'CreateArea' component; 
    - check if 'cors' package is installed in 'server' folder, imported & used in 'index.js' file;
    - check if notes can added as in app so in db;
8. Fetch (get) notes from db with 'useEffect' hook:
    - add 'useEffect' in import 'React' properties in 'App.jsx' component;
    - create useEffect function in 'App.jsx' component;
    - create async-await function inside of 'useEffect' function to get all notes from db but deleted one.
9. Delete note:
    - in 'App.jsx' component create async-await function to delele a note from db;
    - inside of <Note/> element of 'App.jsx' component - create 'onDelete' attribute & pass there reference on 'deleteNote' function as the property;
    - create 'clickDelete' function in 'App.jsx' where pass reference on 'onDelete' attribute with 'props';
    - put 'onClick' attribute in 'delete button' with reference on 'clickDelete' fuction as property in 'Note.jsx';
10. Update notes:
    - create component 'Update.jsx';
    - create a form to show when updating event in 'Update.jsx';
    - create ternary function in App function of 'App.jsx' component to determine when update form show;
    - create 'updateNote' function with 'axios.put' method inside, where setUpdatingText;
    - pass 'onUpdate' function to 'onSubmit' property of update-form element from 'App.jsx';
    - pass 'setUpdatingText' function to 'onChange' property of 'input' and 'textarea' elements;


    