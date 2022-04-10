import React from 'react';
import { createRoot } from 'react-dom/client'
import WebFontLoader from "webfontloader";
import App from './App';

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
