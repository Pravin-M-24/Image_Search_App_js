let search_btn = document.getElementById("search_btn");
let text = document.getElementById("search_image");
let image = document.getElementById("image_container");
let showMore = document.getElementById("show_more_btn")
let page = 1;
let inputData = "";
const accessKey = "QQuUsETzTn8PNZaXyGFPvsMem_CYElWiHXpQus-WpaQ";

async function displayImage(){
     inputData =  text.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
     console.log(data);
    let results = data.results;
     if(page == 1)  image.innerHTML = "";
    results.forEach((result)=>{
       let img = document.createElement("img");
       let a = document.createElement("a");
       let div = document.createElement("div");
        a.href = result.links.html;
        a.innerText = result.alt_description;
        img.setAttribute('src' , result.urls.small);
        div.append(img , a);
        div.classList.add("child_container");
       image.append(div);

        console.log(image);

    })
    page++;
    if(page > 1) showMore.style.display = "block";
}
search_btn.addEventListener('click' , (e)=>{
        page = 1;
        e.preventDefault();
       displayImage();
})
showMore.addEventListener('click' , displayImage);