import React from 'react'
import { lightsearchImg, darksearchImg } from '../../assets/images' 

function SearchCountry({searchInput, searchCountries, darkMode}) {
        
  return (
    <div className='country'>
        <form>
            <input 
                type="text"
                id='search'
                name='search'
                value={searchInput}
                onChange={(e) => searchCountries(e.target.value)}
                placeholder="Search by country name"
                className='country__search'
                autoComplete='off'
            />
            {darkMode ? darksearchImg : lightsearchImg}
        </form>
    </div>
  )
}

export default SearchCountry