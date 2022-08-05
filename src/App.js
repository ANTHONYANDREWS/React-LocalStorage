import './App.css';
import React from 'react'
import Counter from './components/Counter';
import LocalStorageHookAccess from './components/LocalStorageHook';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <LocalStorageHookAccess/>
    </div>
  );
}

export default App;
