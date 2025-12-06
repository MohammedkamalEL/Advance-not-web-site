import Select from "@zener/react-select";
import { useState } from "react";
import { Button, Form, Row, Col, Stack, } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalExample from "../component/ModalExample";
import Card from "../component/Card";

type NoteProps = {
    id: string
    title: string,
    textarea: string,
    selected: string[]
}[]

export default function NotList() {

    const [show, setShow] = useState<boolean>(false);
    const [title, settitle] = useState('')
    const [selected, setSelected] = useState<string[]>([]);


    const allTags = localStorage.getItem('Tags');
    const existTags: string[] = allTags ? JSON.parse(allTags) : [];
    // console.log(existTags);
    const options: { id?: string, label: string, value: string }[] = existTags.map(tag => {
        return { label: tag, value: tag }
    })

    // console.log(options, title);


    const getNote: (string | null) = localStorage.getItem('New Note');
    const allNote: NoteProps = getNote ? JSON.parse(getNote).flat() : [];

    const filtterNote = allNote.filter(note => {

        return (title === '' || note.title.toLowerCase().includes(title.toLowerCase())) && (selected.length === 0 || selected.every(tag => note.selected.includes(tag)))
    })
    // console.log(filtterNote);




    return (
        <section>
            <div className="p-3">
                <Row className=" align-items-center mb-4">
                    <Col>
                        <h1>Notes</h1>
                    </Col>
                    <Col xs='auto'>
                        <Stack gap={3} direction="horizontal">
                            <Link to='/new'>
                                <Button variant='primary' type='button' className="ms-auto ">Create</Button>
                            </Link>

                            <Button variant='outline-secondary' type='button' onClick={() => setShow(true)}>Edit Tags</Button>
                        </Stack>
                    </Col>
                </Row>

                <Form>
                    <Row className="mb-4">
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" value={title} onChange={e => settitle(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Tags</Form.Label>
                                <Select
                                    className='p-2 border rounded'
                                    searchable
                                    multiple
                                    value={selected}
                                    placeholder="Show All Tags"
                                    onChange={(_, val) => {
                                        setSelected(val);
                                    }}
                                    options={async () => options}
                                />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="gap-4">
                        {filtterNote.map(note => (<Col key={note.id}><Card id={note.id} title={note.title} textarea={note.textarea} selected={note.selected} /></Col>))}
                    </Row>
                </Form>
            </div>


            <ModalExample isOpen={show} set={setShow} data={existTags} />
        </section>
    )
}
