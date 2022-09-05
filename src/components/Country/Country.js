import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { backImg } from '../../assets/images'

function Country({ darkMode }) {
    const [country, setCountry] = useState([])
    const {name} = useParams()

    useEffect(()=>{
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.com/v2/name/${name}`)
            const data = await response.json()
            setCountry(data)
        }
        fetchCountryData()
    }, [name])
  return (
    <div className={`single-country__wrapper ${darkMode ? 'darkMain' : ""}`}>
        <div className='container'>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={"/"}> 
            <div className={`single-country__link ${darkMode ? 'darkMain' : ""}`}>
                {backImg}
                <span>Back</span>
            </div>
        </Link>
        <section>
            {country.map(country => {
                return(
                    <div className={`single-country ${darkMode ? "darkMain" : ''}`} key={country.numericCode}>
                        <img src={country.flag} alt={country.name} className='single-country__info--img single-country__info--top'/>

                        <div className='single-country__info--down'>
                            <h1 className='single-country__info--details--name'>{country.name}</h1>
                            <div className='single-country__info--details--wrap'>
                                <div className='single-country__info--details'>
                                    <h3 className='single-country__info--details--content'><span>Native Name: </span> {country.nativeName}</h3>
                                    <h3 className='single-country__info--details--content'><span>Population: </span>{country.population}</h3>
                                    <h3 className='single-country__info--details--content'><span>Region: </span>{country.region}</h3>
                                    <h3 className='single-country__info--details--content'><span>Sub Region: </span>{country.subregion}</h3>
                                    <h3 className='single-country__info--details--content'><span>Capital: </span>{country.capital}</h3>
                                </div>
                                <div className='single-country__info--details'>
                                    <h3 className='single-country__info--details--content'><span>To Level Domain: </span> {country.topLevelDomain}</h3>
                                    <h3 className='single-country__info--details--content'><span>Currencies: </span>{country.currencies[0].name}</h3>
                                    <h3 className='single-country__info--details--content'><span>Languages: </span>{country.languages[0].name}</h3>
                                </div>
                            </div>  
                        </div>
                           
                    </div>
                )
            })}
        </section>
        </div>
    </div>
  )
}

export default Country