import { Fragment, useState } from "react";

const useCurrency = (label, initialState, options) => {
    // Custom hook state
    const [state, updateState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value=''>--Select--</option>
                {options.map (option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </select>
        </Fragment>
    );

    // Return state, interface and function that modifies the state
    return [state, Select, updateState];
}
 
export default useCurrency;