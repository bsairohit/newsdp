import React, { useContext } from "react";
import { useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} 
from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Swal from "sweetalert2";
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import { Navigate } from "react-router-dom";




export function SignupForm(props) {
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
   
    if((name=="")||(password=="")||(location=="")||(phonenumber=="")||(email==""))
    {
      let Str="Fields Are Empty"
      return successAlert(Str);
    }
    if(password.length<=6)
    {
      let Str="Please Select Strong Password At Least of 7 Characters";
      return successAlert(Str);
    }
    let zx=0;
    for(let i=0;i<phonenumber.length;i++)
    {
      if(!((phonenumber[i]>='0')&&(phonenumber[i]<='9')))
      zx=1;
    }
    if((zx==1)||(phonenumber.length!=10))
    {
      let Str="Phone Number is not Valid";
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
    // console.log(ciphertext);
    setPassword(password);
    e.preventDefault()
    const res = await fetch('http://localhost:8080/add' , {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        location: location,
        password: password,
        phonenumber: phonenumber
      })
    })
    
    const data = await res.json()
    console.log(data.success)
    var strc="Registered Successfully!"
    


    setsu(true)
    
  }
 if(su)
 {
   return <Navigate to="" />
 }
console.log(su)
  return (
    <BoxContainer>
      <FormContainer  >
        <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="UserName" />
        <Input value={email} onChange={(e) =>setEmail(e.target.value)} type="email" placeholder="Gmail" />
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        <Input value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="text" placeholder="Phone Number" />
        <Input value={location} onChange={(e)=>setLocation(e.target.value)} type="text" placeholder="Location As State/City/LocalAddress" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={handleSubmit}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />   
      {/* <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink> */}
      <a href="#"style={{textDecoration: "None",color:"gray" , fontSize: "12px", padding:".23px" , margin:".23px"}}  onClick={switchToSignin} >Already have an account?   Signin</a>
    </BoxContainer>
  );
} 