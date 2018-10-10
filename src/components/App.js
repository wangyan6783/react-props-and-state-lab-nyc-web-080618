import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      },
    }
  }

  onAdoptPet = (id) => {
    let newPets = [...this.state.pets]
    let targetPet = newPets.find(pet => pet.id === id);
    targetPet.isAdopted = true;
    this.setState({
      pets: newPets
    })
  }

  changeType = type => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  findPets = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
      .then(r => r.json())
      .then(data => {
        console.log(data);
        this.setState({
          pets: data
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
    }
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
