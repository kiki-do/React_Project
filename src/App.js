import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DialogContainer from './components/Dialog/DialogContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />

      <div className="app-wrapper-all">
        <Routes>
          <Route path="/profile/*" element={<ProfileContainer />} />
          <Route
            path="/dialog/*"
            element={
              <DialogContainer
                store={props.store}
                photo="http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
              />
            }
          />
          <Route path="/news" element={<News news__message="Что происходит в мире?" />} />
          <Route path="/friends" element={<FriendsContainer />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
