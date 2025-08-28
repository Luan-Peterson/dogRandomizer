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

botao.addEventListener('click',  async() => {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let data = await response.json()
    document.getElementById('niha').src = data.message
})

