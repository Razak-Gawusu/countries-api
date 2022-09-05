import React from "react";

function FilterRegion(props) {
  const allRegions = [
    {
      id: "Africa",
      name: "africa",
    },
    {
      id: "Americas",
      name: "americas",
    },
    {
      id: "Asia",
      name: "asia",
    },
    {
      id: "Europe",
      name: "europe",
    },
    {
      id: "Oceania",
      name: "oceania",
    },
  ];

  const [regionInput, setRegionInput] = React.useState("");

  React.useEffect(() => {
    if (regionInput){
        const fetchCountryByRegion = async () => {
            const response = await fetch(
              `https://restcountries.com/v2/region/${regionInput}/`
            );
            const data = await response.json();
            props.setCountries(data);
          };
          fetchCountryByRegion();
    } else {
        const fetchCountryByRegion = async () => {
            const response = await fetch(
              `https://restcountries.com/v2/all/`
            );
            const data = await response.json();
            props.setCountries(data);
          };
          fetchCountryByRegion();
    }
    
  }, [regionInput, props]);

  const changeRegion = (e) => {
    const button = document.querySelector('.filterRegion__dropdown--btn');
    let value = `${e.target.dataset.region}`
    button.textContent = value
    setRegionInput(value);
  }

  const allRegionsElements = allRegions.map((region) => (
    <div
      key={region.id}
      onClick={changeRegion}
      data-region={region.name}
      className="dropdown--link"
    >
      {region.name}
    </div>
  ));

  return (
    <>
      <div className="filterRegion">
        <div className="filterRegion__dropdown">
          <button className="filterRegion__dropdown--btn">
            Filter by region
          </button>
          <div className="filterRegion__dropdown--content">
            {allRegionsElements}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterRegion;
