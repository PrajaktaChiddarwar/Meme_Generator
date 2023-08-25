const api= "https://meme-api.com/gimme/wholesomememes"

const button = document.querySelector('.meme-genertor .btn');
const MemeTitle = document.querySelector('.meme-genertor .meme-title')
const img = document.querySelector('.meme-genertor img');
const MemeAuthor =  document.querySelector(".meme-genertor .meme_author")



const updateData = (url, title, author)=>
{
img.setAttribute("src",url);
MemeTitle.innerHTML= title;
MemeAuthor.innerHTML=`Meme By: ${author}`;
}
const generateMeme =()=>
{
    fetch(api).then((response)=>(response.json()))
    .then (data => updateData(data.url, data.title, data.author))
}

button.addEventListener("click", generateMeme) ;