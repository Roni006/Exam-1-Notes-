import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";


const initialState = {
    notes: [],
}
const saveNotes = JSON.parse(localStorage.getItem("notes"));
if (saveNotes) {
    initialState.notes = saveNotes;
}
const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload]
            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        deleteNote : (state,action) => {
            state.notes = state.notes.filter((note)=> note.id != action.payload)
            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        updateNote : (state,action) => {
            const {id,name,title, description, createdAt} = action.payload;
            const note = state.notes.find((note)=> note.id == id)
            if(note){
                note.name = name,
                note.title = title,
                note.description = description,
                note.createdAt = createdAt
                localStorage.setItem("notes", JSON.stringify(state.notes))
            };
        },

        
    },
});

export const { addNote, deleteNote,updateNote } = noteSlice.actions;
export default noteSlice.reducer;