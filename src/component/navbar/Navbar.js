import {useState} from 'react';
import styles from './Navbar.module.scss'
import { Link, NavLink, useNavigate} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();
  
  const hideMenu = () => {
    setShowMenu(false)
  };

  const logoutUser = (e) => { 
    e.preventDefault();
    toast.success('Logout successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    navigate("/");    
  }

  const logo = (
    <div className={styles.logo}>
      <Link to='/'>
        <h2> 
          Edit<span>Portfolio</span>.
        </h2>
      </Link>
    </div>
  )

  const activeLink = ({ isActive })=>
  (isActive ? `${styles.active}` : "")

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    />
    <header>
      <div className={styles.header}>
        {logo}

        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
          <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`: `${styles["nav-wrapper"]}`} 
          onClick={hideMenu}>
          </div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>
            
            <li>
              <NavLink to="/"  className={activeLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/templates" className={activeLink}>Templates</NavLink>
            </li>
            <li>
              <NavLink to="/playground" className={activeLink}>Editor</NavLink>
            </li>
          </ul>

          <div className={styles['header-right']} onClick={hideMenu}>
            <span className={styles.links}>
                
              <NavLink to="/login" className={activeLink}>Login</NavLink>
   
              <NavLink to="/register" className={activeLink}>Register</NavLink>
        
              <NavLink to="/" onClick={logoutUser} >Logout</NavLink>
      
            </span>
          </div>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Navbar