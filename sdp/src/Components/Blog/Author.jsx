import React from 'react';
import vns3 from "../Images/vns3.jpg"
import Avatar from '@mui/material/Avatar';
import {useState,useEffect} from 'react'
export const Author = () => {
  const id=1
  const[author,setAuthor]=useState([])
  useEffect(() => {
   
    async function fetchAgents(){
    const response  = await fetch(`http://localhost:8080/gebyid/${id}` , {method : 'GET'})
    const data = await response.json();
    console.log(data.photos)
    setAuthor(data);
    let mn=data.length;
    if(mn>4)
    mn=4
    
    }
       fetchAgents()
       } , [])
    return(
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-30">
    <div className="absolute left-0 right-0 -top-14">
    <Avatar
        alt="Remy Sharp"
        src={author.photos}
        sx={{ width: 100, height: 100 }}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.phonenumber}</p>
    <p className="text-white text-ls">{author.email}</p>
    <p className="text-white text-ls">{author.location}</p>
  </div>
)};
