import React from 'react'

function FilterRegion() {
    const allRegions = [
        {
            id: 'Africa',
            name: 'Africa'
        },
        {
            id: 'Americas',
            name: 'Americas'
        },
        {
            id: 'Asia',
            name: 'Asia'
        },
        {
            id: 'Europe',
            name: 'Europe'
        },
        {
            id: 'Oceania',
            name: 'Oceania'
        }
    ]
    const [regionInput, setRegionInput] = React.useState('')
    const [region, setRegion] = React.useState([])

    React.useEffect(()=>{
        const fetchCountryByRegion = async () =>{
            const response = await fetch(`https://restcountries.com/v3.1/${!regionInput ? "all" : `region/${regionInput}`}`)
            const data = await response.json()
            setRegion(data)
        }
        fetchCountryByRegion()
    }, [regionInput])

    const changeRegion = (e) => {
        setRegionInput(e.target.outerText)
    }

    const allRegionsElements = allRegions.map(region => (
        <div key ={region.id} onClick={changeRegion} value ={region.name} className="dropdown--link">
            {region.name}
        </div>
    ))

  return (
    <div className='filterRegion'>
        <div className='filterRegion__dropdown'>
            <button className='filterRegion__dropdown--btn'>Filter by region</button>
            <div className='filterRegion__dropdown--content'>
                {allRegionsElements}
            </div>
        </div>
    </div>
  )
}

export default FilterRegion