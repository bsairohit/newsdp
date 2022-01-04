import { Link } from '@mui/material'
import React from 'react'
import moment from 'react-moment'
import vns from "../Images/vns.jpg"
import { motion } from 'framer-motion'
import vns3 from "../Images/vns3.jpg"
export const PostCard = ({post}) => {
  console.log(post)
    return (
      <>
      <div className="snap-center bg-white shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] rounded-[45px] p-0 lg:p-15 pb-12 mb-8 transform">
        <motion.div animate={{scale:0.93}} className="snap-center rounded-[40px] relative overflow-hidden shadow-md pb-80 mb-6 hover:scale-[1.005]">
          <motion.img animate={{scale:1}} src={post.image} alt={post.title} className="shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
        </motion.div>
    
        <motion.h1 animate={{x:10,y:-10,fontSize:10, color:'#ff2994',}} className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
          {post.title}
        </motion.h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.discription} in {post.location} Location</p>
          </div>
         
          {/* <div className="font-medium text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div> */}
        </div>
        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          This has a rent of {post.rent} Rs. And this blog was posted by 
        </p>
         <div className="text-center">
           <a href={`/blog_detail/${post.id}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
           </a>     
        </div>
    </div>
    </>
    )
}

