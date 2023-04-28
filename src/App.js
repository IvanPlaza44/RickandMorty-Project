import React from 'react';
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
   const navigate = useNavigate()
   const [characters, setCharacters] = React.useState([]);
   const [access, setAccess] = React.useState(false);

   const EMAIL = "plazaivanalt@gmail.com"
   const PASSWORD = "123asd"
   
const login = (userData) =>{
   if(EMAIL === userData.email && PASSWORD === userData.password){
      setAccess(true);
      navigate("/home");
   }
}
React.useEffect(() => {
   !access && navigate('/');
}, [access]);



function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
const onClose = (id)=>{
   setCharacters(
      characters.filter((character)=>character.id !== Number(id))
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
