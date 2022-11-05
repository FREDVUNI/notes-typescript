import * as React from 'react'
import { Note } from '../models/notes.model'
import { Card,Button } from 'react-bootstrap'

interface INotesProps{
    note:Note,
    handleDelete: (id:string) => void
}

const Notes:React.FC<INotesProps> = ({note,handleDelete}) =>{
    return(
        <div className="mb-3 justify-contents-center">
            <Card style={{backgroundColor:note.color}}>
                <Card.Body>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.text}</Card.Text>
                    <Card.Subtitle className="text-muted">{new Date(note.date).toLocaleString()}</Card.Subtitle>
                    <Button className="mt-3 btn-lg" variant="default" onClick={() => handleDelete(note.id)}>
                        <i className="fas fa-trash" title="delete note"></i>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Notes