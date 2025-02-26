import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';

function App() {

  return (
    <>
      <Router basename="/PS6FrontEnd">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
