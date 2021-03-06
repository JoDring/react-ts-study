import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={6} />,
  document.getElementById('root')! as HTMLElement
);
registerServiceWorker();
