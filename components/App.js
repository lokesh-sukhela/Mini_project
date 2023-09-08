// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './Signup';
import Home from './Home';
import Popup from './popup';
import LearningAndDev from './LearningAndDev';
import TrainingSheet from './TrainingSheet';
import PopupDialog from './adminside';
import Profile from './profile';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/Signup' element={<Signup />}></Route>
            <Route path='/Home' element={<Home />}></Route>
            <Route path='/Popup' element={<Popup />}></Route>
            <Route path='/Learn' element={<LearningAndDev />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/Dashboard" element={<TrainingSheet />}></Route>
            <Route path="/admin" element={<PopupDialog />}></Route>
            
            
          </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
