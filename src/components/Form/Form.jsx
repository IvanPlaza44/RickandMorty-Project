import React from "react";
import validation from "./validation";

const Form =({login})=>{
    const [userData, setUserData] = React.useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = React.useState({
        email: "",
        password: "",
    })

    const handleChange=(event)=>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value,
        })
        setErrors(validation({
            ...userData, 
            [event.target.name] : event.target.value

        }))
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        login(userData)
    }




    return(
        <form  onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input placeholder="Ingrese email..." onChange={handleChange} value={userData.email} type="text" name="email"/>
            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input placeholder="Ingrese paswword..." onChange={handleChange} value= {userData.password} type="password" name="password" />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

            <button type="submit">Submit</button>
        </form>
    )

}
export default Form;