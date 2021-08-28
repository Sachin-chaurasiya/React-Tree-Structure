import React from 'react';

import './App.css';
import Fields from './components/fields';
import { JSONObject } from './data';

const {namespace,...newType}=JSONObject
function App() {
  return (
    <div className="App">
      <Fields {...newType} />
    </div>
  );
}

export default App;
