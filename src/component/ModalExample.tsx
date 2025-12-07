import { Col, Form, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ModalProps = {
    isOpen: boolean,
    data: string[],
    set: React.Dispatch<React.SetStateAction<boolean>>
}
function ModalExample({ isOpen, data, set }: ModalProps) {

    return (
        <Modal show={isOpen} onHide={() => set(false)}>

            <Modal.Header closeButton>
                <Modal.Title>Edit Tags</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Stack>
                        {data.map(tag => (
                            <Row key={tag} gap={2}>
                                <Col>
                                    <Form.Control type='text' defaultValue={tag} />
                                </Col>
                                <Col xs='auto' className='my-1'>
                                    <Button variant='outline-danger'>&times;</Button>
                                </Col>
                            </Row>
                        ))}
                    </Stack>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => set(false)}>
                    Close
                </Button>
            </Modal.Footer>


        </Modal>
    )
}


export default ModalExample;