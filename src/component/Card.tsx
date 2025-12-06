import { Badge, Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

type CardProps = {
    id: string;
    title: string;
    textarea: string;
    selected: string[];

}

export default function CardU({ title, textarea, selected }: CardProps) {
    return (
        <Card className='hoverEffect text-center'>
            <Card.Body>
                <Card.Title >{title}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text>
                    {textarea}
                </Card.Text>
                <Stack direction="horizontal" gap={2} className='text-center justify-content-center'>
                    {selected.length === 0 ? <Badge bg="secondary">NO Tag</Badge> : selected.map(tag => <Badge bg="primary" className='g-2' key={tag}>{tag}</Badge>)}
                </Stack>
            </Card.Body>
        </Card>
    )
}
