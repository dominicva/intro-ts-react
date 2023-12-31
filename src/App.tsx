import './App.css'
import countries from './countries.json'

function CountryCard({ name, continents, population, capital, flags }) {
  return (
    <article className="country">
      <img src={flags.svg} alt={flags.alt} className="country__flag" />
      <div className="country__text-content">
        <hgroup>
          <h2 className="country__name">{name}</h2>
          <h3 className="country__continent">{continents[0]}</h3>
        </hgroup>
        <div className="country__info">
          <p className="country__info-container">
            <span className="country__label">Capital city</span>
            <span className="country__value">{capital}</span>
          </p>
          <p className="country__info-container">
            <span className="country__label">Population</span>
            <span className="country__value">
              {population.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </article>
  )
}

function CountriesList({ countries }) {
  return (
    <ul className="countries">
      {countries.map((country) => (
        <li key={country.name}>
          <CountryCard {...country} />
        </li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <main>
      <h1 className="main__heading">Countries Of the World</h1>
      <CountriesList countries={countries} />
    </main>
  )
}

export default App
