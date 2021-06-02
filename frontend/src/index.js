import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import App from './App';

import './index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </Router>,
  document.getElementById('root')
);
