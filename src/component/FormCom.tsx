import { useRef, useState, type FormEvent } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { handelForm } from "../util/handelForm";
import Select from "@zener/react-select";
import "@zener/react-select/index.css";

// 18:31

export default function FormCom() {
  const titleRef = useRef<HTMLInputElement>(null!);
  const textareaRef = useRef<HTMLTextAreaElement>(null!);
  const [selected, setSelected] = useState<string[]>([]);
  const options = [
    { label: "Laern one houer", value: "Laern one houer" },
    { label: "قرائة قران", value: "قرائة قران" },
    { label: "Next.js", value: "Next.js" },
    { label: "Start Now", value: "Start Now" },
  ]


  function handelSubmitForm(event: FormEvent) {
    event.preventDefault()
    handelForm(titleRef, textareaRef)
  }

  return (
    <Form onSubmit={handelSubmitForm}>
      <Stack gap={5}>
        <Row>
          <Form.Group as={Col} controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control ref={titleRef} type="text" required placeholder="Text" />
          </Form.Group>
          <Form.Group as={Col} controlId="tag">
            <Form.Label >Tags</Form.Label>
            <Select
              creatable
              multiple
              value={selected}
              placeholder="Creat New Tags"
              onChange={(_, val) => {
                setSelected(val);
              }}
              options={async () => options}
            />
          </Form.Group>
        </Row>
        <Form.Group controlId="body">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows={15} required ref={textareaRef} />
        </Form.Group>
      </Stack>
      <Stack direction='horizontal' gap={3} className='mt-4 justify-content-end'>
        <Button variant='outline-primary' type='submit'>Save</Button>
        <div className="vr" />
        <Link to='..'>
          <Button variant='outline-danger' type='button'>Cancle</Button>
        </Link>
      </Stack>
    </Form>
  )
}
