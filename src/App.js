import './App.css';
import Tool1 from './components/Tool1';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Displaycard from './components/Displaycard';
import { Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/form' element={<Tool1 />}/>
      <Route path='/card' element={<Card />}/>
      <Route path='/card/:id' element={<Displaycard/>}/>
    </Routes>
    <Footer/> 

    </>



  );
}

export default App;
