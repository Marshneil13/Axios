//************************************* Axios ***************************************
// A library for making http requests
// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log(res.data.ticker.price);
// }).catch(err => {
//     console.log("ERROR!", err)
// })

// const fetchBitcoinPrice = async () => {
//     try{
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price);
//     }catch(e){
//         console.log("ERROR!", e)
//     }
// }
//************************************ Setting Headers *********************************
const jokes = document.querySelector('#jokes')
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        console.log(res.data.joke)
        const newLi = document.createElement('li');
        newLi.append(res.data.joke);
        jokes.append(newLi);
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}
