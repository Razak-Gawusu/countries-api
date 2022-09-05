import React from 'react'
import SearchCountry from '../SearchForm/SearchCountry'
import FilterRegion from '../SearchForm/FilterRegion'
import CountryInfo from './CountryInfo'

function Main(props) {
  const [countries, setCountries] = React.useState([])
  const [searchInput, setSearchInput] = React.useState('')
  const [filtered, setFiltered] = React.useState([])

  React.useEffect(()=>{
    const fetchCountries = async () => {
      const response = await fetch(`https://restcountries.com/v2/all`)
      const data = await response.json()
      setCountries(data)
    }
    fetchCountries()
  },[])

  
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if(searchInput){
      const filteredCountries = countries.filter(country =>(
          Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase())
        )
      )
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

  return (
      <div className={`mainContent ${props.darkMode ? "darkMain" : ""}`}>
        <div className='container'>
            <div className='mainContent__form'>
                <SearchCountry darkMode ={props.darkMode} searchInput={searchInput} searchCountries={searchCountries} />
                <FilterRegion /> 
            </div>
            <div className='country__info--wrapper'>
              {searchInput.length > 0 ? filtered.map(country => {
                return(
                  <CountryInfo 
                    key={country.numericCode}
                    name={country.name}
                    flag={country.flag}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                    )
                 }) : countries.map(country => {
                return(
                  <CountryInfo 
                    key={country.numericCode}
                      name={country.name}
                      flag={country.flag}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                  />
                    )
                  })
              }
            </div> 
        </div>
      </div>
  )
}

export default Main