import React from 'react'
import { Link } from "react-router-dom";

const CountriesList = (props) => {
    const countries = props.country
    return (
        <div>
            <ul className="countries-link">
            {countries.map((country) => {
                return (
                    <Link to={{
                        pathname: '/'+ country.cca3,
                        state: country
                    }}><li key={country.cca3}>
                            <img src={`https://restcountries.eu/data/${country.cca3.toLowerCase()}.svg`} alt='flag' />
                        <p>{country.name.common}</p>
                        </li>
                    </Link>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default CountriesList

