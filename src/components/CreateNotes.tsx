import * as React from 'react'
import { Form,Button,Alert } from "react-bootstrap"
import { Note } from '../models/notes.model'

interface ICreateNotesProps{
    notes:Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes:React.FunctionComponent<ICreateNotesProps> = ({notes,setNotes}) =>{
    const [error,setError] = React.useState<string>("")
    const titleRef = React.useRef<HTMLInputElement | null>(null)
    const textRef = React.useRef<HTMLTextAreaElement | null>(null)
    const colorRef = React.useRef<HTMLInputElement | null>(null)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault()

        if(titleRef.current?.value === "" || textRef.current?.value === ""){
            return setError("All fields are required.")
        }

        setError("")

        setNotes([...notes,{
            id: (new Date()).toString(),
            title:(titleRef.current as HTMLInputElement).value,
            text:(textRef.current as HTMLTextAreaElement).value,
            color:(colorRef.current as HTMLInputElement).value,
            date:(new Date()).toString()
        }])
        
        //eslint@typescript-eslint/no-unused-expressions
        // localStorage.setItem("notes",JSON.stringify(notes))

        // (titleRef.current as HTMLInputElement).value = "";
        // (textRef.current as HTMLTextAreaElement).value = "";

    }
    return(
        <>
            <h2>Create Notes</h2>
            { error && <Alert variant="danger">{error}</Alert> }
            <Form className="mt-3 mb-3" onSubmit={ (e) => handleSubmit(e) }>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" ref={titleRef} placeholder="Enter the note's title"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="text" ref={textRef} placeholder="Enter the note's description" as="textarea" rows={5}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
                    <Form.Control type="color"  ref={colorRef} id="colorInput" defaultValue="#dfdfdf" title="Choose color"/>
                </Form.Group>
                <Button type="submit" variant="dark">submit</Button>
            </Form>
        </>
    )
}

export default CreateNotes