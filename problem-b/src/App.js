import React, { Component } from 'react'; //import React Component


import './style.css';
import lodash from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.pets
    }
  }

  adopt = (name) => {
    this.setState((currentState) => {
      currentState = lodash.find(this.state.pets, { 'name': name });
      currentState.adopted = true;
      let stateChanges = currentState;
      return stateChanges;
    })
  };

  render() {
    let breed = lodash.groupBy(this.state.pets, 'breed');
    breed = Object.keys(breed);
    
    return (
      <body>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <AboutNav />
              <BreedNav breeds={breed} />
            </div>
            <div id="petList" className="col-9">

              <PetList adoptCallback={this.adopt} pets={this.state.pets} />
            </div>
          </div>
        </main>
        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </body>

    );
  }
}

class AboutNav extends Component {


  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>

    );
  }
}

class BreedNav extends Component {
  render() {
    let pet = this.props.breeds.map((breedType) => {
      return <li key={breedType}><a href="#/">{breedType}</a></li>;
    })


    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {pet}
        </ul>
      </nav>
    );
  }
}

class PetCard extends Component {
  onClick = () => {
    this.props.adoptCallback(this.props.name)
  }

  render() {


    return (
      <div className="card" onClick={this.onClick}>
        <img className="card-img-top" src={this.props.image} alt={this.props.name} />
        <div className="card-body">
          <h3 className="card-title">{this.props.adopted ? this.props.name + ' (Adopted)' : this.props.name}</h3>
          <p className="card-text">{this.props.sex + ' ' + this.props.breed}</p>
        </div>
      </div>
    );

  }
}

class PetList extends Component {

  render() {
    let petBreed = this.props.pets.map((pet) => {
      return <PetCard adoptCallback={this.props.adoptCallback} sex={pet.sex} breed={pet.breed} name={pet.name} image={pet.img} adopted={pet.adopted} />;
    })
    return (
      <div>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">{petBreed}</div>
      </div>

    )
  }
}


export default App;