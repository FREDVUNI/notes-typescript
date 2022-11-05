import React,{useState} from 'react';
import { Note } from './models/notes.model'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const storedNotes = JSON.parse(localStorage.getItem("notes"))
  const [notes,setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title:"Meeting with the team",
    text:"Meeting with the frontend designers team for uI/UX",
    color:"#dfdfdf",
    date: (new Date()).toString()
  }])
  return (
    <div className="App">
      <Home notes= { notes } setNotes={setNotes}/>
    </div>
  );
}

export default App;
