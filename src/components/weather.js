import React, { Component } from 'react'

class Weather extends Component {
    render(props) {
        return  (
            <React.Fragment>
                <h1>Weather</h1>
                {this.props.city && this.props.country &&  <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temp && <p>Temperature: { this.props.temp }</p>}
                {this.props.humidity && <p>Humidity: { this.props.humidity }</p>}
                {this.props.description && <p>Conditions: { this.props.description }</p>}
                {this.props.error && <p>{ this.props.error }</p>}      
            </React.Fragment>
        );
    }
};

export default Weather;