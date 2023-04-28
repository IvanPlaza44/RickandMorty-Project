import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom"


const Nav = ({onSearch})=>{
    return(
        <>
            
            <nav className={style.navContainer}>
                <div  >
                <NavLink className={style.linkBar} to="/">LOGOUT</NavLink>
                <NavLink className={style.linkBar} to="about">ABOUT</NavLink>
                <NavLink className={style.linkBar} to="home">HOME</NavLink>
                <NavLink className={style.linkBar} to="favorites" >FAVORITES</NavLink>
                <SearchBar onSearch= {onSearch}/>
                </div>
            </nav>
            
        </>
        )
        
       
}
export default Nav;