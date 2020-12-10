const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQuotes = document.getElementById('newQuotes');


let realData = "";

let getnewQuotes = () => {
    let ranNumber = Math.floor(Math.random() * 1647);
    quotesdata = realData[ranNumber]
    quotes.innerHTML = `${quotesdata.text}`
    quotes.author == null
    author.innerHTML = `${quotesdata.author}`

}


let getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getnewQuotes();
        console.log(realData);
    } catch (error) {

    }
};
newQuotes.addEventListener('click', getnewQuotes);
getQuotes();

