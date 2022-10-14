import { Fragment, useState } from "react";

const useCurrency = () => {
    // Custom hook state
    const [state, updateState] = useState('');

    const Select = () => (
        <Fragment>
            <label>Currency</label>
            <select>
                <option value='USD'>USD</option>
            </select>
        </Fragment>
    );

    // Return state, interface and function that modifies the state
    return [state, Select, updateState];
}
 
export default useCurrency;