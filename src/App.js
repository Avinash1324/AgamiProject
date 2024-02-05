
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AdminSignup from './Components/AdminSignup';
import Adminlogin from './Components/Adminlogin';
import Entry from './Components/Entry';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/entry' element={<Entry/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/adminlogin' element={<Adminlogin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/admin' element={<AdminSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
