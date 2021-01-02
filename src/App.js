import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Route path="/Profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route exact path="/Dialogs" render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
