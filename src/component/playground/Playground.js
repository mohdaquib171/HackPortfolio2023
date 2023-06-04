import ReactDOMServer from 'react-dom/server';
import React, { useState, useEffect } from 'react';
import { html } from 'js-beautify';
import TemplateOne from '../templates/TemplateOne';
import template from "../../assets/template.txt";

import "./playground.css";

const Playground = () => {
  const [rawContent, setRawContent] = useState(
    ReactDOMServer.renderToStaticMarkup(<TemplateOne />)
  );
  const [templateContent, setTemplateContent] = useState(
    html(rawContent, { indent_size: 2 })
  );

  useEffect(() => {
    document.getElementById("src-code").value = templateContent;
  }, []);

  const handleInputChange = (event) => {
    setRawContent(event.target.value);
    const prettyHtml = html(event.target.value, { indent_size: 2 });
    setTemplateContent(prettyHtml);
  };

  const handleSaveTemplate = () => {
    const templateHtml = templateContent;
    // Save or download the updated templateHtml using the 'file-saver' package
  };

  return (
    <div className="playground">
      <div className="textarea-container">
        <h2 className="title">EDITOR FILE</h2>
        <div className="border-edit"></div>
        <div className="row">
          <textarea
            id="src-code"
            className="src-code"
            value={rawContent}
            onChange={handleInputChange}
          />


        <div 
          className="template-preview" 
          contentEditable 
          dangerouslySetInnerHTML={{__html: templateContent}} 
          onBlur={(e) => setRawContent(e.target.innerHTML)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            border: '5px solid',
            paddingTop: "0",
            backgroundColor: 'rgba(255, 255, 255)'
          }}
        />
      </div>
    </div>

      <div className="save">
      <a id="btn-link" href={template} target='_blank' download>
      <button
          className="--btn --btn-primary --btn-shop"
          onClick={handleSaveTemplate}
        >
          Save Template
        </button>
        </a>
      </div>
      
    </div>
  );
};

export default Playground;
