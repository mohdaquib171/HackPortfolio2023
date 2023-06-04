import React from 'react'
import './Template.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'

const Templates = () => {
  return (
    <div className='temp-container'>
        <h2 className='title'>Portfolio Template</h2>
        <div className='border-style'></div>
        <div className='temp-img'>
            <img id="image" src={portfolio1} alt="image"/>
            <div className='inline-text'>
            <p>Folio is a simple, elegant and creative website template 
                for showcase your portfolio or personal information. 
                Folio is responsive website template created with Bootstrap 4. 
                Clean source code and well organized files for easy to customization. 
                This template gives you a personal space to share what you are all about 
                as a creative designer, developer, photographer or pretty much any profession!</p>
                <div className=''>
                <a id="btn-link" href="https://alielbekov.dev/" target='_blank'>
                    <button className='--btn --btn-primary --btn-shop'>PREVIEW</button>
                </a>
                <a id="btn-link" href={portfolio1} target='_blank' download>
                <button className='--btn --btn-primary --btn-shop'>DOWNLOAD</button>
                </a>
                </div>
            </div>
        </div>

        <div className='temp-img reverse'>
            <img id="image" src={portfolio2} alt="image"/>
            <div className='inline-text'>
            <p>Folio is a simple, elegant and creative website template 
                for showcase your portfolio or personal information. 
                Folio is responsive website template created with Bootstrap 4. 
                Clean source code and well organized files for easy to customization. 
                This template gives you a personal space to share what you are all about 
                as a creative designer, developer, photographer or pretty much any profession!</p>
                <div className=''>
                <a id="btn-link" href="https://mohdaquib.me/" target='_blank'>
                    <button className='--btn --btn-primary --btn-shop'>PREVIEW</button>
                </a>
                <a id="btn-link" href={portfolio2} target='_blank' download>
                <button className='--btn --btn-primary --btn-shop'>DOWNLOAD</button>
                </a>
                </div>
            </div>
        </div>

        <div className='temp-img'>
            <img id="image" src={portfolio3} alt="image"/>
            <div className='inline-text'>
            <p>Folio is a simple, elegant and creative website template 
                for showcase your portfolio or personal information. 
                Folio is responsive website template created with Bootstrap 4. 
                Clean source code and well organized files for easy to customization. 
                This template gives you a personal space to share what you are all about 
                as a creative designer, developer, photographer or pretty much any profession!</p>
                <div className=''>
                <a id="btn-link" href="https://preview.colorlib.com/#ronaldo" target='_blank'>
                    <button className='--btn --btn-primary --btn-shop'>PREVIEW</button>
                </a>
                
                <a id="btn-link" href={portfolio3} target='_blank' download>
                <button className='--btn --btn-primary --btn-shop'>DOWNLOAD</button>
                </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Templates
