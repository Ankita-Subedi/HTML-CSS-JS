let quote = document.getElementById("quote");
let author = document.getElementById("author");
let textContent = document.querySelector(".text-contents");
let btn = document.querySelector(".btn")

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
quote.innerText = item.content;
author.innerText = item.author;
textContent.style.opacity = "1";
    } )
}

btn.addEventListener("click", getQuote);