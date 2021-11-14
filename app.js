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
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
        const newLi = document.createElement('li');
        newLi.append(jokeText);
        jokes.append(newLi);
}
button.addEventListener('click', addNewJoke);
const getDadJoke = async () => {
    try{
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke;
    } catch(e){
        return "NO JOKES AVAILABLE! SORRY :("
    }
}
