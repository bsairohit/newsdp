import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import moment from 'react-moment'
export const CommentsForm = ({id}) => {

   const[comment,setComment]=useState('')
   
   let current=new Date();
   const successAlert = (str) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: str,
    })
    }
    const callOnCreation = (str) => {
      Swal.fire({
        position: 'absolute',
        icon: 'success',
        title: str,
        showConfirmButton: false,
        timer: 1000
      })
    }
  const handlePostSubmission=async(e)=>{
    if(comment=="")
    {
      let Str="Empty Comments Not Accepted"
      return successAlert(Str);
    }
    
    
    const res = await fetch('http://localhost:8080/addcomment' , {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
       comment:comment,
       doc: current.toLocaleDateString().toString(),
       blogid:id
      })
    })
    var strc="Comment Posted!";
    const data = await res.json()
    console.log(data)
    setComment("")
    return callOnCreation(strc);
  }
 

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3  className="font-sans md:font-serif text-xl mb-8 font-semibold border-b pb-4">Leave a Comment!</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"  placeholder="Comment" />
      </div>
      <div className="mt-8">
        <button  onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Comment</button>
        
       </div>
    </div>
  );
};