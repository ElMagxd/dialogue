import React from 'react';
import { createRoot } from 'react-dom/client'
import WebFontLoader from "webfontloader";
import App from './App';

WebFontLoader.load({
  google: {
    families: ["Open Sans:300,400,700"],
  },
});

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(<App/>);
