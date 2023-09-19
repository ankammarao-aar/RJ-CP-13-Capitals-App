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
class Capitals extends Component {
  state = {isCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({isCapitalId: event.target.value})
  }

  getCountry = () => {
    const {isCapitalId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      each => each.id === isCapitalId,
    )
    return activeCountry.country
  }

  render() {
    const {isCapitalId} = this.state
    const country = this.getCountry(isCapitalId)
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-card">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={isCapitalId}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="capital-name">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
