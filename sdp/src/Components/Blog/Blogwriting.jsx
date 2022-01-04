import React from 'react'
import './Blogwriting.scss'
import {PostCard} from '../Blog/PostCard.jsx'
import {Categories} from '../Blog/Categories.jsx'
import {PostWidget} from '../Blog/PostWidget.jsx'
import {useState,useEffect} from 'react'

function Blogwriting() {
    const [posts,setPost]=useState([])
    useEffect(() => {
   
     async function fetchAgents(){
     const response  = await fetch('http://localhost:8080/getallblogs' , {method : 'GET'})
     const data = await response.json();
     setPost(data);
     }
        fetchAgents()
        } , [])
       
    return (
        <div className="snap-x container mx-auto px-10 mb-8 rgb(71 85 105)" style={{padding: "2rem"}}>
        <div className="snap-center grid grid-cols-1 lg:grid-cols-12 gap-24">
           <div className="lg:col-span-7 col-span-[span_11_/_span 16] snap-center">
               
                {
                   
                    posts.map((posts)=>
                    <PostCard post={posts} key={posts.id} />
                   
                    )
                }   
            </div>
            <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                    <PostWidget>
                    </PostWidget>
                    <Categories></Categories>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Blogwriting

