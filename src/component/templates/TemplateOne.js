import React from 'react'

const TemplateOne = () => {
  return (
    <div className="template-page">
      <header>
        <h1 contentEditable>Hello, I'm John Doe</h1>
        <p contentEditable>I'm a Music Designer</p>
      </header>
      <main>
        <section>
          <h2 contentEditable>About Me</h2>
          <p contentEditable>
            I am a passionate Music Designer with over 5 years of experience in creating compelling soundtracks for various multimedia projects.
            I specialize in music composition, sound design, and audio post-production.
          </p>
        </section>
        <section>
          <h2 contentEditable>My Skills</h2>
          <ul>
            <li contentEditable>Music Composition</li>
            <li contentEditable>Sound Design</li>
            <li contentEditable>Audio Post-Production</li>
          </ul>
        </section>
        <section>
          <h2 contentEditable>My Work</h2>          
          <div contentEditable>Soundtrack for the video game "Epic Adventure"</div>
          <div contentEditable>Original score for the short film "Silent Nights"</div>
          <div contentEditable>Sound design for the mobile game "Mystery Manor"</div>
        </section>
        <section>
          <h2 contentEditable>Contact</h2>
          <p contentEditable>For any inquiries, please contact me at john.doe@email.com</p>
        </section>
      </main>
      <footer>
        <p contentEditable>&copy; 2023 John Doe</p>
      </footer>
    </div>
  )
}

export default TemplateOne
