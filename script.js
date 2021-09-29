const quote = document.querySelector("#quote");

fetch('http://quotable.io/random')
    .then(res => res.json())
    .then(data => {
        quote.innerHTML = data.content;
    })