import React from 'react';

import './App.css';
import Field from './components/Field/Field';
import { JSONObject } from './data';

const {namespace,...newType}=JSONObject
function App() {
  return (
    <div className="App">
      <Field isCollapsed {...newType} />
    </div>
  );
}

export default App;
