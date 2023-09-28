import './App.css'
import countries from './countries.json'

type CountryProps = {
  name: string
  continents: string[]
  population: number
  capital: string
  landlocked?: boolean
  flags?: {
    png: string
    svg: string
    alt: string
  }
}

function CountryCard({
  name,
  continents,
  population,
  capital,
  flags,
}: CountryProps) {
  return (
    <article>
      <div>
        <img src={flags?.svg} alt={flags?.alt} />
        <hgroup>
          <h2>{name}</h2>
          <h3>{continents[0]}</h3>
        </hgroup>
        <p>
          <span>capital</span>
          <span>{capital}</span>
        </p>
        <p>
          <span>population</span>
          <span>{population}</span>
        </p>
      </div>
    </article>
  )
}

function CountriesList({ countries }: { countries: CountryProps[] }) {
  return (
    <ul>
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
      <CountriesList countries={countries} />
    </main>
  )
}

export default App
