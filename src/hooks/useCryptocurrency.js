import { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Selection = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;

const useCryptocurrency = (label, initialState, options) => {
    // Custom hook state
    const [state, updateState] = useState(initialState);

    const SelectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Selection
                onChange={e => updateState(e.target.value)}
                value={state}
            >
                <option value=''>--Select--</option>
                {options.map (option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </Selection>
        </Fragment>
    );

    // Return state, interface and function that modifies the state
    return [state, SelectCrypto, updateState];
}
 
export default useCryptocurrency;