import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Cards from './Components/Header/Cards';
import Search from './Components/Search/Search';
import HomePage from './Components/HomePage/HomePage';
import styled from "styled-components";
import {AccountBox} from '../src/Components/accountBox/Index'
import Blogwriting from './Components/Blog/Blogwriting';
import { useState,useEffect } from 'react';
import {Layout} from '../src/Components/Blog/Layout'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { IndividualBlog } from './Components/Blog/IndividualBlog';
import Profile from './Components/Profile/Profile';
// import About from './Components/AboutPage'ccccc
import demo from './Components/demo'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  
  return (
  //   <>
  //   <Header></Header>
  //  <br>
  //  </br>
  //   <Blogwriting></Blogwriting>
  //   {/* <AppContainer>
  //     <AccountBox>
        
  //     </AccountBox>
  //   </AppContainer> */}
  //   </>
    <Router>
      <Routes>
        <Route path="/" element={<><AppContainer><AccountBox /></AppContainer></>} />
        <Route path="/blog" element={<><Header className="lg:sticky relative top-8" /><Blogwriting /></>} />
        <Route path="/blog_detail/:id" element={<><Header  /><IndividualBlog /></>} />
        <Route path="/profile" element={<><Header /> <Profile/> </>} />
        <Route path="/demo" element={<><demo></demo></>} />
      </Routes>
    </Router>
  );
}

export default App;
