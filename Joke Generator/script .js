let jokeDiv = document.getElementById("joke");
let button = document.getElementById("button");

button.addEventListener("click", generateJoke)

async function generateJoke(){
    let response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            "Accept": "application/json"
        }
    });
    let data = await response.json();
    console.log(response);

    let jokeContent = document.createElement("p");
    jokeContent.textContent = data.joke;
    jokeDiv.innerHTML = "";
    jokeDiv.appendChild(jokeContent);
}



