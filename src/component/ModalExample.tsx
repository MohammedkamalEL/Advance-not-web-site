import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

type ModalProps = {
    isOpen: boolean,
    data: string[],
    set: React.Dispatch<React.SetStateAction<boolean>>
}
function ModalExample({ isOpen, data, set }: ModalProps) {
    return (
        <Modal show={isOpen} onHide={()=>set(false)}>
            
                <Modal.Header closeButton>
                    <Modal.Title>Edit Tags</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data.map(tag => {
                        return <ListGroup.Item key={tag} variant="secondary">{tag} <span>+</span></ListGroup.Item>
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => set(false)}>
                        Close
                    </Button>
                </Modal.Footer>

            
        </Modal>
    )
}


export default ModalExample;