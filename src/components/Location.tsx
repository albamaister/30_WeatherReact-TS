import React, { Component } from 'react'

export class Location extends Component<city> {
    
    render() {
         const { city } = this.props;
         console.log(this.props);
        return (
            <div>
                <h1>{city}</h1>
            </div>
        )
    }
}

interface city  {
    city: String
  }

export default Location;
