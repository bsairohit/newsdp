import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import goku1 from "../Images/goku1.jpg"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import axios from "axios"
import SaveIcon from "@mui/icons-material/Save"
import {LoadingButton}from "@mui/lab"
export const ProfileCards = () => {
    const id=1
    const[name,setName]=useState('')
    const[phonenumber,setPhonenumber]=useState('')
    const[location,setLocation]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[aboutme,setAboutme]=useState('')
    const [files, setFiles] = React.useState(null);
    const [image, setImage] = React.useState("");
    const [filename, setFilename] = React.useState("");
    const [SuccessMessage, setSuccessMessage] = React.useState("");
    const [loadingButton, setLoadingButton] = React.useState(false);
    const [enableUpload, setEnableUpload] = React.useState(true);
    const [success, setSuccess] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const[details,setDeatails]=useState('')
    const Input = styled('input')({
        display: 'none',
      });
    const Item = styled(Paper)(({ theme}) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
      }));
      const style = {
        width: '100%',
        maxWidth: "500px",
        bgcolor: 'background.paper',
      };
      const [show,setShow]=useState(false)

      const handleClick=()=>{
          setShow(true)
      }

      useEffect(() => {
   
        async function fetchAgents(){
        const response  = await fetch(`http://localhost:8080/gebyid/${id}` , {method : 'GET'})
        const data = await response.json();
        setDeatails(data);
        let mn=data.length;
        if(mn>4)
        mn=4
        
        }
           fetchAgents()
           } , [])

           const HandleFileChange = async (e) => {
            setEnableUpload(false);
            setFiles(e.target.files[0]);
            console.log(e.target.files[0]);
            setFilename(e.target.files[0].name);
          };

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
          const handlefalse=()=>{
            setShow(false);
          }

          const handleClose = async(e) => {
            console.log({});
            e.preventDefault()
            const res = await fetch('http://localhost:8080/update' , {
              method: 'PATCH',
              headers: {
                'Content-Type': "application/json"
              },
              body: JSON.stringify({
                id: id,
                name: name,
                location: location,
                phonenumber: phonenumber,
                email: email,
                photos:image,
                aboutme:aboutme
              })
            })
            var strc="Registered Successfully!"
            const data_=await res.json()
            console.log(data_)
            setShow(false);
            console.log(strc);
            setName('');
            setEmail('')
            setLocation('')
            window.location.reload(false);
          }; 
    return (


        <div style={{width:"80%"}}>
            <Card sx={{ maxWidth: 480 }} style={{borderRadius: "10px"}}>
                <div  style={{display: "flex" , alignItems: "center",justifyContent:"center"}}>
            <Avatar src={details.photos}  sx={{ height: '300px', width: '300px' }}/>
            </div>
      <div style={{borderRadius:"15 px"}}>
       
          <Typography style={{justifyContent:"center",display: "flex",color:"darkviolet",margin:"1rem"}} gutterBottom variant="h5" component="div">
            @{details.name}
          </Typography>
          <List sx={style} component="nav" aria-label="mailbox folders">
  <ListItem button>
  <div style={{width: "100%"}}>
        <div style={{width: "50%", float: "left",fontFamily:"cursive" ,}}> 
        <h1>
            Name
        </h1>
        </div>
        <div style={{width: "50%",fontFamily:"cursive",marginLeft:"50%", }}> 
            <h1>
            {details.name}
            </h1>
        </div>
    </div>
  </ListItem>
  <Divider />
  <ListItem button divider>

  <div style={{width: "100%"}}>
  <div style={{width: "50%", float: "left",fontFamily:"cursive"}}> 
        <h1 >
            Ph. Number
        </h1>
   </div>
   <div style={{width: "50%",fontFamily:"cursive",marginLeft:"50%" }}> 
    <h1>
    {details.phonenumber}
    </h1>
    </div>
   </div>
  </ListItem>
  <ListItem button>
  <div style={{width: "100%"}}>
  <div style={{width: "50%", float: "left",fontFamily:"cursive"}}> 
        <h1 >
            Email
        </h1>
   </div>
   <div style={{width: "50%",fontFamily:"cursive",marginLeft:"50%" }}> 
    <h1>
        {details.email}
    </h1>
    </div>
   </div>
  </ListItem>
  <Divider  />
  <ListItem button>
  <div style={{width: "100%"}}>
  <div style={{width: "50%", float: "left",fontFamily:"cursive"}}> 
        <h1 >
            Location
        </h1>
   </div>
   <div style={{width: "50%",fontFamily:"cursive",marginLeft:"50%" }}> 
    <h1>
        {details.location}
    </h1>
    </div>
   </div>
  </ListItem>
  <Divider />
  <ListItem button>
  <div style={{width: "100%"}}>
  <div style={{width: "50%", float: "left",fontFamily:"cursive"}}> 
        <h1 >
            About me
        </h1>
   </div>
   <div style={{width: "50%",fontFamily:"cursive",marginLeft:"50%" }}> 
    <h1>
   { details.aboutme}
    </h1>
    </div>
   </div>
  </ListItem>
  <Divider />
  <ListItem button>
  </ListItem>
</List>
      </div>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Update Your Profile
        </Button>
      </CardActions>
    </Card>
    <Dialog style={{margin:"10px",padding:"30px"}}  open={show} >
                      <DialogTitle style={{fontFamily:"cursive",fontWeight:"bolder"}} > Please Update your Personal Information as Per your requirment</DialogTitle>
                    
                      <TextField id="outlined-name" value={name} onChange={(e)=>{
                       setName(e.target.value)
                      }} label="name" variant="outlined" style={{padding:"10px"}} />
                     
                      <TextField id="outlined-name" value={location} onChange={(e)=>{
                        setLocation(e.target.value)
                      }} label="Location in format of Local/City/State" variant="outlined" style={{padding:"10px"}} />

                      <TextField id="outlined-name" value={phonenumber} onChange={(e)=>{
                       setPhonenumber(e.target.value)
                       }} label="PhoneNumber" variant="outlined" style={{padding:"10px"}} />
                      <TextField id="outlined-name" value={email} label="Email" onChange={(e)=>{
                       setEmail(e.target.value)
                      }} variant="outlined" style={{padding:"10px"}} />
                     
                      <TextField id="outlined-name" value={aboutme} onChange={(e)=>{
                       setAboutme(e.target.value)
                       }}
                       label="Breif Description About Locality" variant="outlined" style={{padding:"10px"}} />
                     
                     
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
        </div>
    )
}

