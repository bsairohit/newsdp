import React from 'react'
import moment from 'moment'
import { useState,useEffect } from 'react'
import vns1 from "../Images/vns1.jpg"
import { Link } from '@mui/material'
import { Ladder, Link45deg, Linkedin } from 'react-bootstrap-icons'
export const PostWidget = () => {
    const[allposts,setAllPosts]=useState([]);
    
    useEffect(() => {
     async function fetchAgents(){
     const response  = await fetch('http://localhost:8080/getallblogs' , {method : 'GET'})
     const data = await response.json();
     setAllPosts(data);
     }
   
        fetchAgents()
       console.log(allposts) 
    } , 
    []
    )
    console.log(allposts)
           
    return (
        <div className="rounded-[30px] p-8 mb-8 bg-white shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)]" >
    
            <h1 style={{fontFamily:"cursive"}} className="underline font-style: italic font-[10000] text-xl mb-8 font-semibold border-b pb-4" >
                Recent Posts
            </h1>
            {
                allposts.map((post)=>(
                    <div>
                    <div key={post.id} className="flex items-center w-full mb-4">
                        <div className="w-16 flex-none">
                            <img 
                            src={post.image}
                            alt={post.image}
                            height="160px"
                            width="160px"
                            className="align-middle rounded-full"
                            />
                            <h1>{post.title}</h1>
                        </div>
                        <div className="flex-grow ml-4">
                            <p className="text-grey-500 font-xs">
                                {post.blogdate}
                            </p>
                            <Link45deg />
                            <Link>Go to blog </Link>
                        </div>
                        <br></br>    
                    </div>
                    </div>
                ))
            }
            </div>
    )
}

