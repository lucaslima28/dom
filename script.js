let emocionalDaAna = document.querySelector("p");
let titulo = document.querySelector("h1");
let corpo = document.querySelector("body");
let imagem = document.querySelector("img");
let butao = document.querySelector("button");
let segundoBotao = document.querySelector("button:last-child");

//TROCAR O HUMOR DA ANA
function darChocolate(){
    corpo.style.backgroundColor = "yellow";

    emocionalDaAna.innerHTML = "A Ana fica feliz ao ganhar lindt";

    imagem.src = "https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_960_720.png";

    // butao.innerHTML = "Esquecer a materia"
}
function deixarTriste(){
    corpo.style.backgroundColor = "grey"

    emocionalDaAna.innerHTML = "A Ana fica triste quando esquecem a matéria"

    imagem.src = "https://i.pinimg.com/originals/fa/11/c2/fa11c23eddc07d0dd8b26432750df85e.png";

}
butao.onclick = darChocolate;
segundoBotao.onclick = deixarTriste;
// TROCAR O HUMOR DA ANA
titulo.innerHTML = "Emocional da Ana é aqui";
titulo.style.color = "blue";

//MANIPULANDO CSS
emocionalDaAna.style.fontSize = "15pt";
corpo.style.backgroundColor = "salmon";
imagem.src = "https://i.pinimg.com/originals/cf/f2/25/cff225b9cd29abc501728b4c117f7867.png";
