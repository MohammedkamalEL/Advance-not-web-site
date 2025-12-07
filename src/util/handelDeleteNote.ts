
export function handelDeleteNote(id: string) {


    const checkNote = localStorage.getItem('New Note');
    const getAllNote: { id: string, title: string, textarea: string, selected: string[] }[] = checkNote ? JSON.parse(checkNote).flat() : []
    const exastNote = getAllNote.filter(tag => tag.id !== id)
    // const exastNote = new Map (getAllNote.map(note=>[note.id ,id]))
    // exastNote.delete(id)
    localStorage.setItem('New Note', JSON.stringify(exastNote));
    console.log(exastNote);
    window.location.replace('/')

}