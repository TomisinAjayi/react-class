import React from 'react';
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'

function App() {
  return (
    <div className="App">
      <About></About>
      <hr></hr>
      <Education></Education>
      <hr></hr>
      <Experience></Experience>
      <hr></hr>
    </div>
  );
}

export default App;
