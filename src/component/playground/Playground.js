import ReactDOMServer from 'react-dom/server';
import React, { useState } from 'react';
import TemplateOne from '../templates/TemplateOne';

const Playground = () => {
  const [templateContent, setTemplateContent] = useState(ReactDOMServer.renderToStaticMarkup(<TemplateOne />));

  const handleInputChange = (event) => {
    setTemplateContent(event.target.value);
  };

  const handleSaveTemplate = () => {
    const templateHtml = templateContent;
    // Save or download the updated templateHtml using the 'file-saver' package
  };

  return (
    <div className="playground">
      <div className="textarea-container">
        <textarea value={templateContent} onChange={handleInputChange} />
        <div className="template-preview" dangerouslySetInnerHTML={{ __html: templateContent }}></div>

        
      </div>

      <button onClick={handleSaveTemplate}>Save Template</button>

    </div>
  );
  
};

export default Playground;
