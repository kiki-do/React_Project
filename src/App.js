import React from 'react';
import {  Routes, Route} from 'react-router-dom';
import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        
        <div className='app-wrapper-all'>
				<Routes>
          <Route path="/profile" element = {<Profile state={props.state.profilesPage} addPost={props.addPost}/>}/>
          <Route path="/dialog/*" element = {<Dialog state={props.state.dialogsPage} photo= "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"/>}/>
          <Route path="/news" element = {<News news__message='Что происходит в мире?'/>}/>
          <Route path="/music" element = {<Music />}/>
          <Route path="/settings" element = {<Settings />}/>
        </Routes>
        </div>
      </div>
      
  )
}


export default App;
