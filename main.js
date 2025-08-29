//  fetch("https://dog.ceo/api/breeds/image/random")
//  .then((response) => response.json())
//  .then((data) => console.log(data))
//  .catch((error) => console.error("erro ao buscar os dados", error));


//  // async /// await


//  async function CarregarUsuarios() {
//     try {
//         let response = fetch("https://dog.ceo/api/breeds/image/random")
//         let data =  response.json();
//         console.log(data);
//     }catch(error){
//         console.error("erro ao buscar os dados:", error);
//     }
//  }

//  CarregarUsuarios()


let botao = document.getElementById('junin')

let vamo = false;
let intervalo = null;

async function trocarImagem() {
        let response = await fetch('https://dog.ceo/api/breeds/image/random');
        let data = await response.json()
        document.getElementById('niha').src = data.message
}

botao.addEventListener('click', () => {
    if (vamo) {
        clearInterval(intervalo);
        vamo = false


    } else {
        trocarImagem()
        intervalo = setInterval(trocarImagem, 2000);
        vamo = true

    }
});