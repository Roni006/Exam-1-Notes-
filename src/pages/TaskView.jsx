import { formatDistance } from 'date-fns/formatDistance';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../features/noteSlice';
import Update from '../components/menubar/Update';


const TaskView = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.note);
  const perRow = 4;
  const [next,setNext] = useState(perRow);
  const [visible,  setVisible] = useState(false)
  const [editedName, setEditedName] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedId, setEditedId] = useState();

  const handleDelete = (id) => {
    dispatch(deleteNote(id))
    
  }

  const handleLoadMore = () => {
    setNext((next)=> next+4);
  }
  
  const handleUpdate = (note) => {
    setVisible(true);
    setEditedName(note.name);
    setEditedTitle(note.title);
    setEditedDescription(note.description);
    setEditedId(note.id);
  };
    if(visible){
      return (
      <Update setVisible={setVisible} 
      editedName={editedName} 
      editedTitle={editedTitle} 
      editedDescription={editedDescription} 
      editedId={editedId}  
      setEditedName={setEditedName}
      setEditedTitle={setEditedTitle}
      setEditedDescription={setEditedDescription}
        />
      );
    }
  return (
    <>
      <Helmet>
        <title>TaskView</title>
      </Helmet>
      <div className="container">
        <div>
          <h1
            className='text-white bg-black w-1/5 
            text-3xl text-center m-auto mt-5 mb-[30px] py-3 px-5 
            rounded-md border-4 border-white font-serif'>
            All of the Notes
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-[50px] ">
            {notes.slice(0,next).map((note) => (
              <div className="shadow-black bg-white rounded-md p-4 py-3 border border-green-500 " key={note.id}>
                <h1 className='font-serif text-[18px] text-black font-bold mb-2'>{note.name}</h1>
                <h2 className='font-mono text-slate'>{note.title}</h2>
                <p className='font-mono text-slate-700'>{note.description}</p>
                <span className='font-mono text-gray-400'>
                  {formatDistance(note.createdAt, new Date(), { addSuffix: true })}
                </span>
                <div className="btns mt-4 flex gap-3">
                  <button 
                  className='bg-[#45474B] text-white 
                  py-2 px-5 rounded-md font-mono text-[18px] 
                  font-medium hover:bg-green-500 'onClick={()=> handleUpdate(note)}>
                    Update
                  </button>
                  <button 
                  className='bg-[#45474B] text-white 
                  py-2 px-5 rounded-md font-mono text-[18px] 
                  font-medium hover:bg-red-600 ' onClick={()=> handleDelete(note.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}

          </div>
          {
            notes.length > next && (
              <div className="load-more-btn mt-10 flex justify-center items-center font-bold text-[22px] ">
              <button 
              className='bg-orange-400 text-white 
              py-3 px-12 rounded-md hover:bg-orange-800 
              duration-75 ' onClick={handleLoadMore}>
                Load More
              </button>
            </div>
            )
          }
         
        </div>
      </div>
    </>
  )
}

export default TaskView