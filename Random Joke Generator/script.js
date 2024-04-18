const jokeContainer = document.getElementById("Joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    // jokeContainer.classList.remove("fade");
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.Joke}`;
            // jokeContainer.classList.add("fade");
        });
}
btn.addEventListener("click", getJoke);
getJoke();