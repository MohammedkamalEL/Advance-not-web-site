import { useRef, useState, type FormEvent } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { handelForm } from "../util/handelForm";
import Select from "@zener/react-select";
import "@zener/react-select/index.css";
import type { NoteData } from "../util/@types";

type FormCon = {
  state?: NoteData
}

export default function FormCom({ state }: FormCon) {
  // const d: { label: string, value: string }[] | undefined = state?.selected.map(tag => {
  //   return { label: tag, value: tag }
  // })
  // console.log(d);

  const navegit = useNavigate()
  const titleRef = useRef<HTMLInputElement>(null!);
  const textareaRef = useRef<HTMLTextAreaElement>(null!);
  const [selected, setSelected] = useState<string[]>([]);
  const options: { label: string, value: string }[] = [
    { label: "Laern one houer", value: "Laern one houer" },
    { label: "قرائة قران", value: "قرائة قران" },
    { label: "Next.js", value: "Next.js" },
    { label: "Start Now", value: "Start Now" },
  ]

  function handelSubmitForm(event: FormEvent) {
    event.preventDefault()
    handelForm(titleRef, textareaRef, selected)
    titleRef.current.value = ''
    textareaRef.current.value = ''
    setSelected([])
    navegit('/note', { replace: true })
  }

  if (state) {
    console.log('state');
  }

  return (
    <Form onSubmit={handelSubmitForm}>
      <Stack gap={5}>
        <Row>
          <Form.Group as={Col} controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control ref={titleRef} type="text" defaultValue={state?.title} required placeholder="Text" />
          </Form.Group>
          <Form.Group as={Col} controlId="tag">
            <Form.Label >Tags</Form.Label>
            <Select
              className='p-2 border rounded'
              creatable
              multiple
              value={state?.selected}
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
          <Form.Control as="textarea" rows={15} required defaultValue={state?.textarea} ref={textareaRef} />
        </Form.Group>
      </Stack>
      <Stack direction='horizontal' gap={3} className='mt-4 justify-content-end'>
        <Button variant='outline-primary' type='submit'>Save</Button>
        <div className="vr" />
        <Link to={state ? '/read' : '/note'} state={state}>
          <Button variant='outline-danger' type='button'>Cancle</Button>
        </Link>
      </Stack>
    </Form>
  )
}
