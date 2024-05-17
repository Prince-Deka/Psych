import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css'
import Landing from './components/Landing/Landing.jsx';
import Signup from './components/Signup/Signup.jsx';
import Predict from './components/Predict/Predict.jsx'
import Login from './components/Login/Login.jsx';
function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/predict' element={<Predict/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </Router>

    </>
  )
}

export default App
