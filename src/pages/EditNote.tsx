import { useLocation } from "react-router-dom";
import FormCom from "../component/FormCom";
import type { NoteData } from "../util/@types";

export default function EditNote() {
    const data: NoteData = useLocation().state

    return (
        <section>
            <h1 className="my-4">Edit Note</h1>
            <FormCom state={data} />
        </section>
    )
}
