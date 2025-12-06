
import { type RefObject } from "react";
import { v4 as uuidv4 } from 'uuid';
type TitleRef = RefObject<HTMLInputElement>
type TextareaRef = RefObject<HTMLTextAreaElement>
type Selected = string[]

function removeDublicatStringFromArry<T>(arry: T[]): T[] {
    return Array.from(new Set(arry))
}

export function handelForm(titleRef: TitleRef, textareaRef: TextareaRef, selected: Selected) {
    const randomUUID = uuidv4();
    // const [newNote, setnewNote] = useState<{ title: string, textarea: string, selected: Selected }[]>([])
    const newNoteAdd: { id: string, title: string, textarea: string, selected: Selected }[] = [
        { id: randomUUID, title: titleRef.current.value, textarea: textareaRef.current.value, selected }
    ]
    const getAllNoteExist = localStorage.getItem('New Note');
    const addNewNote = getAllNoteExist ? JSON.parse(getAllNoteExist).flat(Infinity) : [];
    addNewNote.push(newNoteAdd);


    const newTags: string[] = selected
    const getAllTags = localStorage.getItem('Tags');
    const exsistTags: string[] = getAllTags ? JSON.parse(getAllTags) : [];
    const lastArry = [...exsistTags, ...newTags]
    // const lastArry = newTags.concat(exsistTags)
    // console.log(lastArry);

    const a = removeDublicatStringFromArry(lastArry)

    localStorage.setItem('New Note', JSON.stringify(addNewNote))
    localStorage.setItem('Tags', JSON.stringify(a))

}