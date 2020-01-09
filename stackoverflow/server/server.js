import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';


import App from '../src/containers/App';



const PORT = 8080;
const app = express();

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      data = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
  
      return res.send(data);
    });
  });


  app.listen(PORT, ()=>{
      
    console.log(`Server-side rendered application is running on ${PORT}`)
  })