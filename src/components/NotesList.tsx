import * as React from 'react'
import { Note } from '../models/notes.model'
import Notes from "./Notes"
import { Row,Col } from "react-bootstrap"

interface INotesListProps{
    notes: Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList:React.FunctionComponent<INotesListProps> = ({notes,setNotes}) =>{
    const handleDelete = (id:string) =>{
        let filteredNotes = notes.filter(note => note.id !== id)
        setNotes(filteredNotes)
    }

    const renderNotes = ():JSX.Element[] =>{
        return notes.map( note =>(
            <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        ))
    }
    return(
        <>
            <h2 className="mt-3">Notes</h2>
            <Row>
                <Col>{ renderNotes() }</Col>
            </Row>
        </>
    )
}

export default NotesList