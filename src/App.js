import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';




function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   
const login = async (userData) => {
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const QUERY = `?email=${email}&password=${password}`
      const { data } = await axios(URL + QUERY)
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
      
   } catch (error) {
      console.log(error.message)      
   }
}


useEffect(() => {
   !access && navigate('/')
}, [access, navigate]);



const onSearch = async (id) => {
   try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      };
      
   } catch (error) {
      alert('¡No hay personajes con este ID!')
   }
}
const onClose = (id)=>{
   setCharacters(
      characters.filter((character)=> character.id !== id)
   )
   
}
   return (

      <div className='App'>
         {location.pathname === "/" ? <Form login={login} /> : <Nav onSearch={onSearch}/> }
         <Routes>
            <Route path="home" element={<Cards characters={characters} onClose ={onClose}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
