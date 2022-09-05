import React from 'react'
import { Link } from 'react-router-dom'

function CountryInfo({name, flag, population, region, capital}) {
  return (
    <Link style={{ textDecoration: 'none'}} to={`/${name}`}>
      <div className='country__info'>
        <img 
          src={flag}
          alt={name}
          className='country__info--img'
        />

        <div className='country__info--details'>
          <h1 className='country__info--details--name'>{name}</h1>
          <h3 className='country__info--details--content'><span>Population: </span> {population}</h3>
          <h3 className='country__info--details--content'><span>Region: </span>{region}</h3>
          <h3 className='country__info--details--content'><span>Capital: </span>{capital}</h3>
        </div>
    </div>
    </Link>
  )
}

export default CountryInfo