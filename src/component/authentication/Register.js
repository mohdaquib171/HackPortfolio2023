import React from 'react'
import { useState } from 'react'
import styles from './auth.module.scss'
import registerImg from '../../assets/register.png'
import Card from '../../component/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../component/loader/Loader'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[cPassword, setCPassword] = useState("");
    const[isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
        if (password !== cPassword) {
            toast.error("Passwords do not match");
        }
        setIsLoading(true)
    };

    const handleRegister = () => {
        toast.success("Regiseration done successfully")
        navigate("/login")
    }

  return (
    <>
    {isLoading && <Loader /> }
    <ToastContainer />
    <section className={`container ${styles.auth}`}>
        
        <Card>
        <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <input 
                    type="text" 
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    required
                    value={cPassword} 
                    onChange={(e) => setCPassword(e.target.value)} 
                />
                <button type="submit" className="--btn --btn-primary --btn-block" onClick={handleRegister}>Register</button>
            </form>

            <span className={styles.register}>
                <p>Already have an account? &nbsp;</p>
                <Link to="/login" className={styles.fontregister}>Login</Link> 
            </span>
            
        </div>
        </Card>
        <div className={styles.img}>
            <img src={registerImg} alt="Register" width="550"/>
        </div>
    </section>
    
    </>
  )
}

export default Register