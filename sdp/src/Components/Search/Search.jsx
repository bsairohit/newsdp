import React from 'react'
import Cards from '../Header/Cards'
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import {useState,useEffect} from 'react';
function Search() {
    const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `<Grid container spacing={${spacing}}>`;
const [cardsImage,setcardsImage]=useState([])
 useEffect(() => {

    async function fetchAgents(){
    const response  = await fetch('https://valorant-api.com/v1/agents' , {method : 'GET'})
    const data = await response.json();
    setcardsImage(data.data)
    }
  
       fetchAgents()
       } , [])
       console.log(cardsImage)
    return (
        <>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {cardsImage.map((value) => (
              
              <Grid key={value} item>
                <Paper sx={{ height: 500, width: 500 }} >
                    {value.description}
                    <img src={value.bustPortrait}/>
                    </Paper>
              </Grid>

            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Grid container>
              <Grid item>
                <FormControl component="fieldset">
                  <FormLabel component="legend">spacing</FormLabel>
                  <RadioGroup
                    name="spacing"
                    aria-label="spacing"
                    value={spacing.toString()}
                    onChange={handleChange}
                    row
                  >
                     
                    {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                      <FormControlLabel
                        key={value}
                        value={value.toString()}
                        control={<Radio />}
                        label={value.toString()}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
            <Cards></Cards>
              </Grid>
            </Grid>
            
          </Paper>
        </Grid>
      </Grid>
      </>
    )
}

export default Search
