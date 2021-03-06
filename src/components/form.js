import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getWeather}> 
        <label htmlFor='city' autoFocus>City</label>
        <input type="text" name="city" />
        <label htmlFor='country'>Country</label>
        <input type="text" name="country" />
        <button type="submit">Get Weather</button>
    </form>
)

export default Form;