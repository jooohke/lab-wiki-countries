import React, { Component } from 'react'

class CountryDetails extends Component {
    render() {
        console.log(this.props.countries)
        const getCountry = (cca3) => {
            const theCountry = (oneCountry) => {
                return oneCountry.cca3 === cca3
            };
            return this.props.countries.find(theCountry)
        };

        const { params } = this.props.match;
        const foundCountry = getCountry(params.cca3)

        console.log(foundCountry)

        return (
            <div>
            <h1>CountryDetails -</h1>
            
        </div>
        )
    }
}

export default CountryDetails

