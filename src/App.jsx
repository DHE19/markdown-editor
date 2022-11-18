import React, { useState,useEffect } from 'react';
import { marked } from 'marked';


import './App.css';

function App() {

   const [text, setText] = useState('');


    useEffect(() => {
      marked.setOptions({breaks:true});

      const readmePath = require("./markdown.md");
      fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        setText(text);
      })
    }, [])



   return (
    <div className="App">
      <div className='editor-container blur'>
        <div className="tab"></div>
        <textarea id="editor" cols="80"  rows="20"
        value={text}
        onChange={(e) => setText(e.target.value) }/>
      </div>

      <div className="preview-container blur">
        <div className="tab"></div>

        <div id='preview'
        dangerouslySetInnerHTML={{__html: marked(text)}}/>
        </div>
    </div>
  );
}

export default App;
