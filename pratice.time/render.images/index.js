


const imgs = [
    "css/hip1.jpg",
    "css/hip2.jpg",
    "css/hip3.jpg"
]

const container = document.getElementById("container")


function renderImages(){
    let imgsDom=""
    for (let i = 0; i < imgs.length; i++){
        imgsDom += `<img alt="Employee in the compagny" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDom
}

renderImages()