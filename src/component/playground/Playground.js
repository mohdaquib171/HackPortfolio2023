import ReactDOMServer from 'react-dom/server';
import React, { useState, useEffect } from 'react';
import { html } from 'js-beautify';
import TemplateOne from '../templates/TemplateOne';
import "../playground/playground.css"

const Playground = () => {
  const [rawContent, setRawContent] = useState(ReactDOMServer.renderToStaticMarkup(<TemplateOne />));
  const [templateContent, setTemplateContent] = useState(html(rawContent, { indent_size: 2 }));

  useEffect(() => {
    document.getElementById('src-code').value = templateContent;
  }, []);

  const handleInputChange = (event) => {
    setRawContent(event.target.value);
  };

  const handleInputBlur = () => {
    const prettyHtml = html(rawContent, { indent_size: 2 });
    setTemplateContent(prettyHtml);
  };

  const handleSaveTemplate = () => {
    const templateHtml = templateContent;
    // Save or download the updated templateHtml using the 'file-saver' package
  };

  return (
    <div className="playground">
    <div className="textarea-container">
      <div className="row">
        <textarea 
          id="src-code" 
          className="src-code" 
          value={rawContent} 
          onChange={handleInputChange}
          onBlur={handleInputBlur} 
        />


        <iframe 
          className="template-preview" 
          srcDoc={templateContent}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            border: '10px solid',
            backgroundColor: 'rgba(255, 255, 255)'
          }}
        />
      </div>
    </div>

    <button onClick={handleSaveTemplate}>Save Template</button>
  </div>
);
};

export default Playground;
