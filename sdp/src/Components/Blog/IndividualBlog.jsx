import React from 'react'
import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { PostDetail } from './PostDetails'
import { PostWidget } from './PostWidget'
import {Author} from './Author'
import { CommentsForm } from './CommentsForm'
export const IndividualBlog = () => {

    const {id} = useParams()
    const [posts,setPost]=useState([])
    const[reqpost,setReqPost]=useState([])
 
    useEffect(() => {
   
     async function fetchAgents(){
     const response  = await fetch('http://localhost:8080/getallblogs' , {method : 'GET'})
     const data = await response.json();
     
     //console.log("{0Hello world}")
     for(let i=0;i<data.length;i++)
     {
             if(data[i].id==id){
             setReqPost(data[i])
             }
     }
     setPost(data);
     }
        fetchAgents()
        } , [])
       
    return ( 
        <>
        <div className="container mx-auto px-10 mb-8" style={{padding: "2rem"}}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg: col-span-8">
                 <PostDetail post={reqpost} ></PostDetail>
                <Author author={reqpost} ></Author>
                 <CommentsForm id={reqpost.id} ></CommentsForm>
                {/* <Comments></Comments> */}
                 
                </div>
                <div className='col-span-1 lg:col-span-4'style={{padding:"1 rem"}}>
                    <div className="relative lg:sticky top-8">
                        <PostWidget></PostWidget>

                    </div>
                </div>
            </div>
        </div>
     
        </>
    )
}
