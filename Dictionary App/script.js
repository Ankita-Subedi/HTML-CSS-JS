const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const sound = document.getElementById("sound");
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", ()=>{
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url} ${inpWord}`)
    .then((response) => response.json())
    .then((data) => console.log(data) );
});