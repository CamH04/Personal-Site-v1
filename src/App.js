import './App.css';
import NavBar from './NavBar.js';

import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';

import { Route, Routes } from 'react-router-dom';

// ROUTING AND NAVBAR
function App() {
  return (
    <>
    <NavBar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
