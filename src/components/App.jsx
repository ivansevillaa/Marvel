import React from 'react'

import './styles/App.css'

import SearchBar from '../components/SearchBar.jsx'
import Characters from '../components/Characters.jsx'
import Details from '../components/Details.jsx';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Characters />
      <Details />
    </div>
  )
}

export default App
