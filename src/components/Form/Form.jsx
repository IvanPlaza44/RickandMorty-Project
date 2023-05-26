import React from "react";
import validation from "./validation";
import style from "./Form.module.css"

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
        <div className={style.container}>
            <form  onSubmit={handleSubmit} className={style.form}>
                <div className={style.form_front}>
                <p className={style.form_details}>Login</p>
                        <input placeholder="Email" onChange={handleChange} value={userData.email} type="text" name="email" className={style.input}/>
                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                    
                        <input placeholder="Password" onChange={handleChange} value={userData.password} type="password" name="password" className={style.input}/>
                        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                       
                    <button type="submit" className={style.btn}>Submit</button>
                </div>
            </form>  
        </div>
    )

}
export default Form;