import { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.png'
import {Link, useNavigate} from 'react-router-dom'
import Card from '../../component/card/Card'
import {FcGoogle} from 'react-icons/fc'
import Loader from '../../component/loader/Loader'
import { toast } from 'react-toastify'

const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate()

    //login only
    const loginUser = (e) => {
        e.preventDefault();
        setIsLoading(true)

        toast.success("Login Successful...")
        navigate("/")
    
    }

    //Login with Google
    const signInWithGoogle = () => {
        
          toast.success("Login Successful")
          navigate("/")
    }

  return (
    <>
    {isLoading && <Loader /> } 
    <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={loginImg} alt="Login" width="400"/>
        </div>
        <Card>
        <div className={styles.form}>
            <h2> Login </h2>
            <form onSubmit={loginUser}>
                <input type="text" placeholder="Email" required value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" required value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
                <div className={styles.links}>
                    <Link to="/reset" className={styles.fontregister}>Forgot Password</Link>
                </div>  
                <p> -- or -- </p>
            </form>

            <button type="button" className="--btn --btn-danger --btn-block" onClick={signInWithGoogle}>
                <FcGoogle /> &nbsp; Login with Google
            </button>
            <span className={styles.register}>
                <p>Don't have an account? &nbsp;</p>
                <Link to="/register" className={styles.fontregister}>Register</Link> 
            </span>
            
        </div>
        </Card>
    </section>
    </>
  )
}

export default Login
