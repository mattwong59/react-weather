import React from 'react';

const Form = (props) => (
    <React.Fragment>
        <form onSubmit={props.getWeather}> 
            <input type="text" name="city" placeholder="City.." />
            <input type="text" name="country" placeholder="Country.." />
            <button type="submit">Get Weather</button>
        </form>
    </React.Fragment>
)

export default Form;