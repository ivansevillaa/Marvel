import React, { Component } from 'react'

import './styles/App.css'

import SearchBar from './SearchBar.jsx'
import Characters from './CharactersList.jsx'
import Details from './Details.jsx'
import Loading from './Loading.jsx'

import md5 from 'md5';

const API_URL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = '9c89a4db14b7c3af3f407146f5d4d163';
const privateKey = '4576ed72dfd8024fbfbd44c44e8cd6c5a81c0e53';
const ts = '1';
const auth = `ts=${ ts }&apikey=${ publicKey }&hash=${md5(`${ ts }${ privateKey }${ publicKey }`)}`;

class App extends Component {

  state = {
    loading: true,
    error: null,
    initialCharacters: [],
    characterSelected: undefined
  }

  componentDidMount = () => {
    this.fetchInitialCharacter()
  }

  fetchInitialCharacter = async () => {
    this.setState({ loading: true, error: null })
    try {
      const request = await fetch(`${ API_URL }/characters?${ auth }&limit=5`)
      const initialCharacters =  await request.json()
      this.setState({ loading: false, initialCharacters: initialCharacters.data.results })
    } catch(error) {
      this.setState({ loading: false, error: error })
    }
  }
  
  handleOpenDetails = (character) => {
    this.setState({ characterSelected: character })
  }
  
  characterSearched = async (query) => {
    this.setState({ loading: true, error: null })
    try {
      const request = await fetch(`${ API_URL }/characters?${ auth }&limit=5&nameStartsWith=${ query }`)
      const initialCharacters =  await request.json()
      this.setState({ loading: false, initialCharacters: initialCharacters.data.results })
    } catch(error) {
      this.setState({ loading: false, error: error })
    }
  }

  setCharacterSelected = () => {
    this.setState({ characterSelected: undefined })
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    if (this.state.error) {
      return <p>{ this.state.error }</p>
    }
    return (
      <div className="App">
        <SearchBar 
          handleSearch={ this.characterSearched }
          setCharacterSelected={ this.setCharacterSelected }
        />
        <Characters 
          characters={ this.state.initialCharacters }
          handleOpenDetails={ this.handleOpenDetails }
        />
        <Details 
          character={ this.state.characterSelected }
          lengthArrayCharacter={ this.state.initialCharacters.length }
        />
      </div>
    )
  }
}

export default App
