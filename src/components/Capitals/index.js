import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capital extends Component {
  state = {activeCountry: countryAndCapitalsList[0].id}

  onChangeCapital = id => {
    this.setState({activeCountry: id})
  }

  render() {
    const {activeCountry} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      eachCountry =>
        eachCountry.capitalDisplayText.toUpperCase() === activeCountry,
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCountry}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  key={eachCapital.id}
                  value={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{filteredCountry.country}</p>
        </div>
      </div>
    )
  }
}

export default Capital
