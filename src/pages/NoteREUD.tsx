import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import { handelDeleteNote } from "../util/handelDeleteNote";


type NoteREUDProps = {
    id: string, title: string, textarea: string, selected: string[]
}

export default function NoteREUD() {
    const state: NoteREUDProps = useLocation().state
    // console.log(state);

    if (state === null) return <Navigate to={'/'} replace />

    return (
        <Stack gap={4}>
            <h1 className="my-3 text-center bag">Show Note Details</h1>
            <Row className=" align-items-center my-4">
                <Col>
                    <h2>{state.title.toUpperCase()}</h2>
                    <Stack gap={2} direction="horizontal">
                        {state.selected.map(tag => <Badge bg="primary" key={tag}>{tag}</Badge>)}
                    </Stack>
                </Col>
                <Col >
                    <Stack direction="horizontal" className="justify-content-end" gap={2}>
                        <Link to={'/edit'} state={state}>
                            <Button variant="primary">Edit</Button>
                        </Link>
                        <Button variant="outline-danger" onClick={() => handelDeleteNote(state.id)}>Delete</Button>
                        <Link to='/note'>
                            <Button variant="outline-secondary" >Back</Button>
                        </Link>
                    </Stack>
                </Col>
            </Row>
            <Row className=" rounded p-2">
                <p>{state.textarea}</p>
            </Row>
        </Stack>
    )
}
