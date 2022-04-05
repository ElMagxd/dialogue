import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from "webfontloader";
import App from './App';

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
