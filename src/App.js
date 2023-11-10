import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Homepage from './components/homepage';

function App() {
  return (
    
    <div className="App">
     <BrowserRouter>

     <Routes>
      <Route path='/'  element={<Homepage />}/>
      <Route path='careers'  element={<Homepage />}/>
      <Route path='about'  element={<Homepage />}/>
      <Route path='security'  element={<Homepage />}/>
     </Routes>
     

     
     </BrowserRouter>
    </div>
  
  );
}

export default App;
