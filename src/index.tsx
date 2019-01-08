import Hello from './components/StatefulHello';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css'

ReactDOM.render(
  <Hello name="Steve" enthusiasmLevel={1} />,
document.getElementById('root') as HTMLElement
);
registerServiceWorker();
