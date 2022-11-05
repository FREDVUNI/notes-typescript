import * as React from 'react'
import { Note } from '../models/notes.model'
import Header from "../components/Header"
import CreateNotes from "../components/CreateNotes"
import NotesList from "../components/NotesList"
import { Container,Row,Col } from "react-bootstrap"

interface IHomeProps{
    notes: Note[],
    setNotes:React.Dispatch<React.SetStateAction<Note[]>>
}

const Home:React.FunctionComponent<IHomeProps> = ({notes,setNotes}) =>{
    return(
        <>
        <Header/>
        <Container className="mt-5">
            <Row>
                <Col>
                    <NotesList notes={ notes } setNotes={setNotes}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CreateNotes notes={ notes } setNotes={setNotes}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Home