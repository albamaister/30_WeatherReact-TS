import React, { Component } from 'react'

export class WeatherExtraInfo extends Component<Props> {
    render() {
        const {humidity} = this.props; 
        const {wind} = this.props; 
        return (
            <div>
                <span>{`${humidity} % - `}</span>
                <span>{`${wind} viento`}</span>
            </div>
        )
    }
}

interface Props {
    humidity: number,
    wind: string
}

export default WeatherExtraInfo;
