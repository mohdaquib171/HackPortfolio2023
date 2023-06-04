import React from 'react'
import loaderImg from '../../assets/loader5.gif'
import ReactDOM from 'react-dom'
import styles from './Loader.module.scss'

const Loader = () => {

    //It can be used in between when the server response takes time

  return ReactDOM.createPortal (
    <div className={styles.wrapper}>
        <div className={styles.loader}>
            <img src={loaderImg} alt="Loading..." />
        </div>
    </div>, 
    document.getElementById("loader")
  )
}

export default Loader