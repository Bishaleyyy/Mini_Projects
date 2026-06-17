let searchText = document.getElementById("search");
let button = document.getElementById("button");
let imageDiv = document.getElementById("image");
let loadMore = document.getElementById("load");
let page = 1;

async function searchIamge(page,searchText){
    console.log(searchText);
    let response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${searchText}&client_id=NQX-7kLLwAXaYyZT1LXtS1z-Wf4bZR5W7NX1MmZVz4I&per_page=12`)
    let data = await response.json();
    let results = data.results;
    console.log(results);
    results.map((item, index)=>{
    let image = document.createElement("img");
    image.src = results[index].urls['small']
    imageDiv.appendChild(image);
   });

loadMore.addEventListener("click", () =>{
    page++;
    let userTypedValue = searchText.value;
    searchIamge(page, userTypedValue);
});

}
button.addEventListener('click', () => {
    let userTypedValue = searchText.value;
    console.log(userTypedValue);
    searchIamge(page,userTypedValue);
})
