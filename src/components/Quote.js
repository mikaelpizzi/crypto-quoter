const Quote = ({ result }) => {
    if (Object.keys(result).length === 0) return null;

    console.log(result);

    return ( 
        <div>
            <p>The price is: <span>{result.PRICE}</span></p>
            <p>The market capitalization is: <span>{result.MKTCAP}</span></p>
            <p>Last 24h: <span>{result.CHANGEPCT24HOUR}%</span> &nbsp; / &nbsp;<span>{result.CHANGE24HOUR}</span></p>
            <p>Last update: <span>{result.LASTUPDATE}</span></p>
        </div>
     );
}
 
export default Quote;