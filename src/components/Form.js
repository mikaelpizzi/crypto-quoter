import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import useCryptocurrency from "../hooks/useCryptocurrency";
import useCurrency from "../hooks/useCurrency";

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
        transition: background-color .3s ease;
    }
`;

const Form = ({}) => {

    // Cryptocurrencies list state
    const [ cryptoList, saveCrypto] = useState([]);

    const CURRENCIES = [
        { code: 'USD', name: 'American Dollar' },
        { code: 'ARS', name: 'Argentine Peso' },
        { code: 'CLP', name: 'Chilean Peso' },
        { code: 'COP', name: 'Colombian Peso' },
        { code: 'EUR', name: 'Euro' },
        { code: 'MXN', name: 'Mexican Peso' },
        { code: 'GBP', name: 'Pound Sterling' }
    ];

    // Using useCurrency
    const [ currency, SelectCurrency ] = useCurrency('Choose Your Currency', '', CURRENCIES);

    // Using useCryptocurrency
    const [ cryptocurrency, SelectCrypto] = useCryptocurrency('Choose Your Cryptocurrency', '', cryptoList);

    // Execute API call
    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

            const result = await axios.get(url);

            saveCrypto(result.data.Data);
        }

        consultAPI();
    }, []);

    return ( 
        <form>
            <SelectCurrency /> 

            <SelectCrypto />

            <Button
                type='submit'
                value='Calculate'
            />
        </form>
    );
}
 
export default Form;