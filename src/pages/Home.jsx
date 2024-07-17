import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../features/noteSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const CharLimit = 100;
  
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [charcount, setCharCount] = useState(CharLimit);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);


  const handleInputChecked = (e) => {
    setIsChecked(e.target.checked)

  }

  const handleChar = (e) => {
    const newDescription = e.target.value;
    if(newDescription.length <= CharLimit){
      setDescription(newDescription)
      setCharCount(CharLimit - newDescription.length)
    }
  }
  
  

  const handleAddNotes = (e)=> {
      e.preventDefault();
      if(name !== "" && title !== "" && description !== ""){
       
        const newNote = {
          id: Date.now().toString(32),
          name,
          title,
          description,
          createdAt: new Date().toString(),
      };
      setName("");
      setTitle("");
      setDescription("");
      dispatch(addNote(newNote));
      toast.success("Your Form Added Successfully!", {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        });
      }else{
        toast.error("Please Fill The Empty Field!", {
          position: "top-right",
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
          });
      }
      
  };


  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <ToastContainer/>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-1/4 bg-gray-500 shadow-md py-5  px-4 box-border rounded-md'>
          <h1 className='text-2xl font-mono font-bold text-center mb-4'>Add Your Notes</h1>

          <input 
            placeholder='Enter Your Name'
            className='w-full rounded-md border border-blue-500 p-2 outline-none m-2 bg-white'
            onChange={(e)=> setName(e.target.value)}
            value={name}
          />
          <input
            placeholder='Enter Your Title'
            className='w-full rounded-md border border-blue-500 p-2 outline-none m-2'
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
          />

          <div>
            <textarea
              onChange={handleChar}
              // onChange={(e) => setCharCount(e.target.value.length)}
              value={description}
              // maxLength={CharLimit}
              placeholder='Enter Your Description'
              // maxLength={400}
              rows={5}
              // onChange={(e)=> setDescription(e.target.value)}
              className='w-full rounded-md border border-blue-500 p-2 outline-none m-2 resize-none'
              ></textarea>

            <div className="flex justify-end  text-[15px]">
              <p>{charcount}/{CharLimit} Character Remaining</p>
            </div>
          </div>
          <div className="chck-box mt-6 ">
            <input className='cursor-pointer' type="checkbox" checked={isChecked} onChange={handleInputChecked}/> <span>I want to add this task! </span>
          </div>
          <button
            disabled={!isChecked}
            onClick={handleAddNotes}
            className='bg-[#373A40] text-white 
            py-2 px-5 font-mono text-[18px] mt-8 
            rounded-md 
             cursor-pointer'>
              Save Notes
          </button>
        </div>
      </div>
    </>
  )
}

export default Home