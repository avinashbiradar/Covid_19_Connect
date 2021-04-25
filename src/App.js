import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import AppBar from "../src/components/appbar/appbar"
import Home from "../src/components/home/home" 
import Footer from './components/footer/footer';
import Information from './components/information/information';
import NeedHelpRequest from './components/needHelpRequest/needHelpRequest'
import CanHelpRequest from './components/CanHelpRequest/canhelprequest'
import Main from "./components/MainContent/maincontent"
function App() {
  return (
     <>
     <BrowserRouter>
     <AppBar/>
     <Switch>
     <Route component={Home} path="/" exact />
     <Route component={Information} path="/information" />
     <Route component={NeedHelpRequest} path="/need" />
     <Route component={CanHelpRequest} path="/canHelp" />
     <Route component={Main} path="/main" />
     </Switch>
    
     </BrowserRouter>
      </>
  );
}

export default App;
