export const getBitcoinData = async() => {
    const api_key = process.env.REACT_APP_API_KEY
    const response = await fetch('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=' + api_key);
    if (response.ok){
        return response.json();
    } else {
        console.log(response.ok);
    }
};