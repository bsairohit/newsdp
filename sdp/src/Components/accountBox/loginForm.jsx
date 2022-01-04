import { BoxContainer, FormContainer,Input, MutedLink,BoldLink, SubmitButton } from "../accountBox/common"
import {Marginer} from "../marginer/index.jsx";
import React, { useContext } from "react";
import { AccountContext } from "../accountBox/accountContext";
import {useState ,useEffect} from 'react'

import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
export function LoginForm(props) {
  const [userdata,setUserdata]=useState([])
  const [id,setId]=useState()
  useEffect(() => {
    async function fetchAgents(){
    const response  = await fetch('http://localhost:8080/getallhost' , {method : 'GET'})
    const data = await response.json();
    setUserdata(data);
    }
       fetchAgents()
       } , [])
     
  const handleClose = async(e) => {
    console.log({});
    e.preventDefault()
    const res = await fetch('http://localhost:8080/addneed' , {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        hostid:userdata.id,
      })
    })
    var strc="Registered Successfully!"
    window.location.reload(false);
  }; 
    
       
   
    const { switchToSignup } = useContext(AccountContext);

    const { switchToSignin } = useContext(AccountContext);
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[phonenumber,setPhoneNumber]=useState('')
    const[location,setLocation]=useState('')
    const [users, setUsers] = useState([null])
    const [su,setsu]=useState(false)
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
   
    const handleSubmit = async(e) => {
   
      if((password=="")||(email==""))
      {
        let Str="Fields Are Empty"
        return successAlert(Str);
      }
      if(password.length<=6)
      {
        let Str="Please Select Strong Password At Least of 7 Characters";
        return successAlert(Str);
      }
      let st='@gmail.com';
      let idx=0;
      for(let i=0;i<email.length;i++)
      {
        if(email[i]=='@')
        {
          idx=i;
          break;
        }
      }
      if(idx==0)
      {
        let Str="Gmail is Invalid";
        return successAlert(Str);
      }
      let pt=0;
      console.log(idx);
      let zx=0
      for(let i=idx;i<email.length;i++)
      {
        if(email[i]!=st[pt])
        {
          zx=1;
          break;
        }
        pt++;
      }
      if((zx==1)||((email.length-idx)!=st.length))
      {
        let Str="Gmail is Invalid";
        return successAlert(Str);
      }
      // var AES = require("crypto-js/aes");
      // var SHA256 = require("crypto-js/sha256");
      // var CryptoJS = require("crypto-js");
      // var cipher = CryptoJS.AES.encrypt(password, "secret");
      // var ciphertext = CryptoJS.AES.encrypt(password, 'secret key 123').toString();
      // console.log(ciphertext)
      setPassword(password);
      let zzz=0
      // for(let idxh=0;idxh<userdata.length;idxh++)
      // {
      //   if((userdata[idxh].email===email)&&(userdata[idxh].password===password))
      //   zzz=1
     

      setsu(true)
      
    }
   if(su)
   {
     return <Navigate to="/profile" />
   }

    return (
      <BoxContainer>
        <FormContainer>
          <Input type="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <Input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton onClick={handleSubmit} type="submit">Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        {/* <MutedLink href="#">
         ?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink> */}
         <a href="#" style={{textDecoration: "None",color:"gray" , fontSize: "12px" ,padding: "0.7rem"}}  onClick={switchToSignup} > Don't have an account? SignUp</a>
      </BoxContainer>
    );
  }