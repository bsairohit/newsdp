import React from 'react'
import { ProfileCards } from './ProfileCards'
import { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { orange } from '@mui/material/colors';
import axios from "axios"
// import vns3 from "../Images/vns3.jpg"
import SaveIcon from "@mui/icons-material/Save"
import {LoadingButton}from "@mui/lab"

function Profile() {
  const [open, setOpen] = useState(false);
  const [title,setTitle] = useState('')
  const[location,setLocation]=useState('')
  const[date,setDate]=useState('')
  const[member,setMember]=useState('')
  const[rent,setRent]=useState('')
  const[description,setDiscription]=useState('')
  const[Cdescription,setCDiscription]=useState('')
  const[allvalues,setAllvalues]=useState([])
  const [posts,setPost]=useState([])
  const [files, setFiles] = React.useState(null);
  const [image, setImage] = React.useState("");
  const [filename, setFilename] = React.useState("");
  const [SuccessMessage, setSuccessMessage] = React.useState("");
  const [loadingButton, setLoadingButton] = React.useState(false);
  const [enableUpload, setEnableUpload] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const HandleFileChange = async (e) => {
    setEnableUpload(false);
    setFiles(e.target.files[0]);
    console.log(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  useEffect(() => {
   
    async function fetchAgents(){
    const response  = await fetch('http://localhost:8080/getallblogs' , {method : 'GET'})
    const data = await response.json();
    setPost(data);
    let mn=data.length;
    if(mn>4)
    mn=4
    
    for(let i=0;i<mn;i++)
    {
       setAllvalues(data[i])
      console.log(allvalues.length)
    }
    console.log(allvalues.length)
    }
       fetchAgents()
       } , [])
     
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlefalse=()=>{
    setOpen(false);
  }
  const handleClose = async(e) => {
    console.log({});
    e.preventDefault()
    const res = await fetch('http://localhost:8080/addblog' , {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        blogdate:d,
        location:location,
        title:title,
        members:member,
        rent :rent,
        completedisciption:Cdescription,
        discription:description,
        image:image
      })
    })

    
    var strc="Registered Successfully!"
    setOpen(false);
    console.log(strc);
    setTitle('');
    setDiscription('')
    setRent('')
    setMember('')
    setCDiscription('')
    window.location.reload(false);
  }; 

  const Input = styled('input')({
    display: 'none',
  });
  
 var x=new Date()
 var d=x.toLocaleDateString().toString()
 console.log(title)

 
 const HandleUpload = async () => {
  if (!loading) {
    setSuccess(false);
    setLoading(true);
    setLoadingButton(true);
    setEnableUpload(true);

    let form = new FormData();

    form.append("image", files, files.name);

    let res = await axios.post("http://localhost:3002/upload", form, {
      onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
    });

    console.log(res);

    setImage(res.data.publicUrl);

    setSuccess(true);
    setSuccessMessage("File Upload Successfull ");
    setLoading(false);
    setLoadingButton(false);

    setFiles(null);
  }
};

  return (
    <div className="snap-x container mx-auto px-10 mb-8 rgb(71 85 105)" style={{padding: "2rem"}}>
           <div className="snap-center grid grid-cols-2" >
             <ProfileCards></ProfileCards>
               <div  >
                   <div className="relative top-8">
                    <ListItem button style={{backgroundColor:"white",borderRadius:"15px"}}>
                      <div style={{width: "100%", float: "left",fontFamily:"cursive",fontSize:"10 px",fontWeight:"unset" }}> 
                        <h1>
                         Create Blogs to Connect with people and Search for Paying guest
                        </h1 >
                      </div>
                   <Box sx={{ '& > :not(style)': { m: 1 } }}>
                      <Button variant="outlined" onClick={handleClickOpen} style={{size:"small", borderRadius:"300px",borderColor:"gray"}} >
                      <AddIcon />
                   </Button>
                   <Dialog style={{margin:"10px",padding:"30px"}}  open={open} >
                      <DialogTitle style={{fontFamily:"cursive",fontWeight:"bolder"}} >Vacant Details</DialogTitle>

                           <DialogContentText style={{padding:"1rem", display:"flex" ,fontFamily:"cursive", justifyContent:"center" }}>
                    Kindly, Share all the required details that paying guest should know, and also provide brief discription about local area's and envoirnment around house. 
                           </DialogContentText>
                    
                      <TextField id="outlined-name" value={title} onChange={(e)=>{
                       setTitle(e.target.value)
                      }} label="Title" variant="outlined" style={{padding:"10px"}} />
                     
                      <TextField id="outlined-name" value={location} onChange={(e)=>{
                        setLocation(e.target.value)
                      }} label="Location in format of Local/City/State" variant="outlined" style={{padding:"10px"}} />

                      <TextField id="outlined-name" value={d} variant="outlined" style={{padding:"10px"}} />
                      <TextField id="outlined-name" value={member} onChange={(e)=>{
                       setMember(e.target.value)
                       }} label="Members allowed" variant="outlined" style={{padding:"10px"}} />
                      <TextField id="outlined-name" value={rent} label="Rent" onChange={(e)=>{
                       setRent(e.target.value)
                      }} variant="outlined" style={{padding:"10px"}} />
                     
                      <TextField id="outlined-name" value={description} onChange={(e)=>{
                       setDiscription(e.target.value)
                       }}
                       label="Breif Description About Locality" variant="outlined" style={{padding:"10px"}} />
                     
                     
                      <TextField  id="outlined-name" value={Cdescription} onChange={(e)=>{
                       setCDiscription(e.target.value)
                      }} label="Complete Details and Description" variant="outlined" style={{padding:"10px"}} />
                      <div style={{display:"flex",alignItems:"row"}}>
                     <label htmlFor="icon-button-file">
                   <Input  onChange={(e) => HandleFileChange(e)} accept="image/*" id="icon-button-file" type="file"  />
                 <IconButton color="primary" aria-label="upload picture" component="span">
               <PhotoCamera />
            </IconButton>
            
            </label>
            <Box sx={{ m: 1, position: "relative" }}>
            <LoadingButton
              loading={loadingButton}
              disabled={enableUpload}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              onClick={HandleUpload}
              variant="outlined"
            >
              Upload
            </LoadingButton>
          </Box>
          <span>{SuccessMessage}</span>
      <h1 style={{padding:"10px"}}>
         Upload Photo
       </h1>
      </div>
                    <DialogActions>
                      <Button style={{fontFamily:"cursive",fontWeight:"bolder"}} onClick={handlefalse}>Cancel</Button>
                      <Button style={{fontFamily:"cursive",fontWeight:"bolder"}} onClick={handleClose}>ADD-Details</Button>
                      </DialogActions>
                      </Dialog>
                </Box>
                </ListItem>
               
                <Divider  />
                <br>
                </br>
                {
                 posts.map((c)=>( 

               <div>
                <ListItem button style={{borderRadius:"15px",backgroundColor:"white"}}>
                <div style={{display: "flex",width:"100%"}}>
                  <div style={{display: "flex",flex: 0.5}}>
                  <Avatar src={c.image}  sx={{ height: '200px', width: '200px' }}/>
                  </div>
                  <div  style={{justifyContent:"center"}}>
                  <ListItem >
                     <h1 style={{fontFamily:"cursive",fontWeight:"normal"}}> This was Posted on {c.blogdate} </h1>
                  </ListItem>
                  <ListItem >
                     <h1 style={{fontFamily:"cursive",fontWeight:"normal"}}> The Location Of the House is:{c.location} </h1>
                  </ListItem>
                  <ListItem >
                     <h1 style={{fontFamily:"cursive",fontWeight:"bold"}}> {c.discription} </h1>
                  </ListItem>
                </div>

                </div>

                </ListItem>
                <br>
                </br>
               </div>
                  ))} 
                 </div>
            </div>
            </div>
    </div>
  )
}

export default Profile
