import React from 'react'
import './Home.css'
import dev from '../../assets/webdeveloper.png'
import Templates from '../templates/Templates'

const Home = () => {

  const handleTypeWrite =  () => {} 

  return (
    <div>
      <section className="home-container">
        <div className="head1">
        <h2><br/><br/>Edit your profile </h2>
        <h1>with <span className='color-change'>EditPortfolio.</span></h1>
        <h2>Improve design of your portfolio.</h2><br/>
        <h4>Get Ready to experience the playground to Edit.</h4>
        </div>
        <div>
          <img id="profile" src={dev} alt="image"/>
        </div>
    </section>
    
    <div className='div-2'>
    
    <Templates />
    
    </div>
    </div>
  )
}

export default Home
