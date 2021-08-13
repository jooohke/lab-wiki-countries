import React, { Component } from 'react'
import countries from "../countries.json"

class CountryDetails extends Component {
    render() {
        const getCountry = (cca3) => {
            const theCountry = (oneCountry) => {
                return oneCountry.cca3 === cca3
            };
            return countries.find(theCountry)
        };

        const { params } = this.props.match;
        const foundCountry = getCountry(params.cca3)

        console.log(foundCountry)


        return (
            <div>
            <h1>
                <img style={{height:"1em", margin:"0.5em"}}src={`https://restcountries.eu/data/${foundCountry.cca3.toLowerCase()}.svg`} alt='flag' />
                {foundCountry.name.common}
            </h1>

            <table>
                <tr>
                    <td>Capital</td>
                    <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{foundCountry.area} km²</td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {foundCountry.borders.map((country) => {
                        return (<li key={country} style={{listStyle:"none"}}>{getCountry(country).name.common}</li>)
                    })}
                        </ul>
                        </td>
                </tr>

            </table>
            
        </div>
        )
    }
}

export default CountryDetails

