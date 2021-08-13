import React from 'react'
import { Link } from "react-router-dom";

const CountriesList = (props) => {
    const countries = props.country
    return (
        <div>
            <ul>
            {countries.map((country) => {
                return (
                    <Link to={{
                        pathname: '/'+ country.cca3,
                        state: country
                    }}><li key={country.cca3} style={{listStyle:"none"}}>{country.name.common}</li></Link>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default CountriesList

