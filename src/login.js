import reactjs from "react";
import "./login.css"

const login = () => {
    return(
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
        </div>
    )
}

export default login