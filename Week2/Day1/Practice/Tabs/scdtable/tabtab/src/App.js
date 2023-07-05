import './App.css';
import { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
function App() {
  const tabItems = [
    {
      label: 'Tab 1',
      content: 'This is the content of Tab 1',
    },
    {
      label: 'Tab 2',
      content: 'This is the content of Tab 2',
    },
    {
      label: 'Tab 3',
      content: 'This is the content of Tab 3',
    },
  ];





  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        {JSON.stringify(tabItems)}
        <Tabs tabItems = {tabItems} />
      </fieldset>
    </div>
  );
}

export default App;
