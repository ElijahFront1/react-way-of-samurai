import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/Profile" render={() => <ProfileContainer />} />
          <Route exact path="/Dialogs" render={() => <DialogsContainer />} />
          <Route exact path="/Users" render={() => <UsersContainer/>} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
