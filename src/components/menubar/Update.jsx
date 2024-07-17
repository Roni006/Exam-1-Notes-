import React from 'react'
import { ImCross } from "react-icons/im";
import { MdDescription } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { updateNote } from '../../features/noteSlice';


const Update = ({ 
    setVisible, 
    editedName,  
    editedTitle ,
    editedDescription , 
    editedId, 
    setEditedName, 
    setEditedTitle, 
    setEditedDescription
    }) => {
        const dispatch = useDispatch();
        const handleEdite = () => {
            const updatedValues = {
                id: editedId,
                name :  editedName,
                title : editedTitle,
                description : editedDescription,
                createdAt: new Date().toString(),
                
            };
            dispatch(updateNote(updatedValues));
            setVisible(false);
        }
    return (
        <>
            <div className="bg-slate-500 w-[620px] h-[600px] flex justify-center m-auto mt-3 py-5 px-5">
                <div className="w-[650px] bg-white shadow-md rounded-md">
                    <div className='w-full bg-white  py-5 px-4 box-border rounded-md'>
                        <div className="relative">
                            <h1 className='text-3xl font-mono font-bold text-center mb-4 underline' >Update Your Notes</h1>
                            <div
                                className="absolute top-0 right-0 px-3 py-2
                             bg-slate-400 text-white rounded-md 
                             cursor-pointer"
                                onClick={() => setVisible(false)}>
                                <ImCross />
                            </div>
                        </div>
                        <input
                            placeholder='Enter Your Name'
                            className='w-full rounded-md border border-blue-500 p-2 outline-none m-2'
                            value={editedName}
                            onChange={(e)=>setEditedName(e.target.value)}

                        />
                        <input
                            placeholder='Enter Your Title'
                            className='w-full rounded-md border border-blue-500 p-2 outline-none m-2'
                            value={editedTitle}
                            onChange={(e)=>setEditedTitle(e.target.value)}

                        />

                        <div>
                            <textarea
                                // onChange={(e) => setCharCount(e.target.value.length)}
                                // value={description}
                                // maxLength={400}

                                placeholder='Enter Your Description'
                                rows={5}
                                className='w-full rounded-md border border-blue-500 p-2 outline-none m-2 resize-none'
                                value={editedDescription}
                                onChange={(e)=>setEditedDescription(e.target.value)}
                            />

                        </div>

                        <button
                            className='bg-[#373A40] text-white 
                            py-2 px-5 font-mono text-[18px] mt-8 
                            rounded-md hover:bg-green-500 
                            hover:text-black' onClick={handleEdite}>
                                Update Notes
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update