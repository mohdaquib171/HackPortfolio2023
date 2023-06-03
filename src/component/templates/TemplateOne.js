import React from 'react'

const TemplateOne = () => {
  return (
    <div className="template-page">
      <header>
        <h1>Welcome to the Template Page</h1>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>This is a template static webpage.</p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Responsive design</li>
            <li>Easy customization</li>
            <li>Interactive components</li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>For any inquiries, please contact us.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  )
}

export default TemplateOne