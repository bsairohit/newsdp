import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState,useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './Cards2.css'
import cn from "classnames";
import { ReplyFill as Icon } from "react-bootstrap-icons";
function Cards() {
 const [cardsImage,setcardsImage]=useState([])
 const [showBack, setShowBack] = useState([null])
 const [backdata,sebackData]=useState([])
 useEffect(() => {

  async function fetchAgents(){
  const response  = await fetch('https://valorant-api.com/v1/agents' , {method : 'GET'})
  const data = await response.json();
  setcardsImage(data.data);
  let a=[]
  for(var i=0;i<data.data.length;i++)
  {
    a[i]=true;
  }
  setShowBack(a)
  }
     fetchAgents()
     } , [])
   
  
     
    
      const onClick = (e,id) =>{
        e.preventDefault();
        let a=[]
        for(var i=0;i<showBack.length;i++)
        {
          a[i]=showBack[i];
        }
       for(let i=0;i<cardsImage.length;i++)
       {

         if(id===cardsImage[i].uuid)
         {
          a[i]=!(a[i])
         }
       }
       setShowBack(a);
      }  
      const callmyfunction = (id) =>{
        for(let i=0;i<cardsImage.length;i++)
        {
          if(cardsImage[i].uuid===id)
          {
            return showBack[i];
          }
        }
      }
      console.log(showBack)
    return (
      <div className="container-class" id="container-class" >
        <div className="left">
      <Grid container>
        {cardsImage.map((c) => (
         
//          <Grid item xs={6}>
//       <Card  sx={{ maxWidth: 350}}>
//         { callmyfunction(c.uuid)  ? <> <CardActionArea>
//         <CardMedia
//           component="img"
//           height="350"
//           image={c.bustPortrait}
//           alt="green iguana"
//           style={{backgroundColor:'primary'}}
//         />
//         <CardContent style={{backgroundColor:'primary',}}>
//           <Typography gutterBottom variant="h5" component="div">
//             {c.developerName}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {c.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary" onClick={(e)=>onClick(e,c.uuid)}  >
//           Apply
//         </Button>
//       </CardActions>
// </>
//       :
//     <h1>helloworld</h1> }

//     </Card>
     
//     <br></br>
//     <br></br>
//     </Grid>
<Grid item xs={4}>
  <div style={{display: "flex",flexWrap: "wrap", justifyContent: "space-around", alignItems: "center"}}>

<div className="flip-card">
<div className="flip-card-inner">
  <div className="flip-card-front">
    <img src={c.bustPortrait} alt="Avatar" style={{width: '300px', height: '300px'}} />
  </div>
  <div className="flip-card-back">
    <h2>{c.developerName}</h2> 
    <br>
    </br>
    <br>
    </br>
    <h5>{c.description}</h5> 
    <p>We love that guy</p>
  </div>
</div>
</div>
  </div>
</Grid>

       
 ))}

  </Grid>

  </div>
  <div className='right'>

  </div>

  </div>
    )
}

export default Cards
