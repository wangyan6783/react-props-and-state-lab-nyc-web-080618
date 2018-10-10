import React from 'react'

class Pet extends React.Component {

  // adoptPet = event => {
  //   console.log(event.target.id);
  //   this.props.onAdoptPet(event.target.id)
  // }

  onAdoptPet = event => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  showGender = () => {
    return this.props.pet.gender === "male" ? '♂' : '♀'
  }

  showAdoptBtn = () => {
    return this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.onAdoptPet} className="ui primary button">Adopt pet</button>
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.showGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.showAdoptBtn()}
        </div>
      </div>
    )
  }
}

export default Pet
