import React from 'react';

const TemplateOne = () => {
  const style = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      margin: '0',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: '#333',
      background: '#264653',
      textAlign: 'center',
    },
    header: {
      fontSize: '2em',
      marginBottom: '0.5em',
      color: '#2a9d8f',
    },
    p: {
      fontSize: '1.5em',
      marginBottom: '1em',
      color: '#e9c46a',
    },
    main: {
      margin: '1em',
    },
    section: {
      margin: '1em 0',
      color: '#f4a261',
    },
    footer: {
      fontSize: '1em',
      marginTop: 'auto',
      color: '#e76f51',
    },
  };

  return (
    <div style={style.page}>
      <header style={style.header}>
        <h1 contentEditable>Hello, I'm John Doe</h1>
        <p style={style.p} contentEditable>I'm a Music Designer</p>
      </header>
      <main style={style.main}>
        <section style={style.section}>
          <h2 contentEditable>About Me</h2>
          <p contentEditable>
            I am a passionate Music Designer with over 5 years of experience in creating compelling soundtracks for various multimedia projects.
            I specialize in music composition, sound design, and audio post-production.
          </p>
        </section>
        <section style={style.section}>
          <h2 contentEditable>My Skills</h2>
          <ul>
            <li contentEditable>Music Composition</li>
            <li contentEditable>Sound Design</li>
            <li contentEditable>Audio Post-Production</li>
          </ul>
        </section>
        <section style={style.section}>
          <h2 contentEditable>My Work</h2>          
          <div contentEditable>Soundtrack for the video game "Epic Adventure"</div>
          <div contentEditable>Original score for the short film "Silent Nights"</div>
          <div contentEditable>Sound design for the mobile game "Mystery Manor"</div>
        </section>
        <section style={style.section}>
          <h2 contentEditable>Contact</h2>
          <p contentEditable>For any inquiries, please contact me at john.doe@email.com</p>
        </section>
      </main>
      <footer style={style.footer}>
        <p contentEditable>&copy; 2023 John Doe</p>
      </footer>
    </div>
  )
}

export default TemplateOne;
