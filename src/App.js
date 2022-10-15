import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import image from './cryptocurrency.png'
import Quote from './components/Quote';
import Spinner from './components/Spinner';

const Container = styled.div`
  display: grid;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  letter-spacing: 1.25px;

  &::after {
    content: '';
    width: 162px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {

  const [ currency, saveCurrency ] = useState('');
  const [ cryptocurrency, saveCryptocurrency ] = useState('');
  const [ result, saveResult ] = useState({});
  const [ loading, saveLoading ] = useState(false);

  useEffect(() => {

    const quoteCrypto = async () => {
      // Avoid first execution
      if (currency === '') return;

      // Consult API to obtain quotation
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

      const result = await axios.get(url);

      // Show spinner
      saveLoading(true);

      // Hide spinner and show result
      setTimeout(() => {
        // Change spinner state to false
        saveLoading(false);
        
        // Save quote
        saveResult(result.data.DISPLAY[cryptocurrency][currency]);
      }, 900);

    }
    quoteCrypto();
  }, [currency, cryptocurrency])

  // Show spinner or result 
  const component = (loading) ? <Spinner /> : <Quote result={result} />

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt='crypto-image'
        />
      </div>
      <div>
        <Heading>Trade Cryptocurrencies Instantly</Heading>

        <Form 
          saveCurrency={saveCurrency}
          saveCryptocurrency={saveCryptocurrency}
        />

        {component}
      </div>
    </Container>
  );
}

export default App;
