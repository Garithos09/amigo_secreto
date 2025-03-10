// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let ListaDeAmigos = [];


function agregarAmigo(){
    let AmigoNuevo = document.getElementById("amigo").value;

    // VALIDAR SI LA LISTA DE AMIGOS NO ESTA VACIA Y SI NO SE REPITE EL NOMBRE
    if(AmigoNuevo === ""){
        alert("Por favor ingrese un Nombre");
        return;
    }

    if(ListaDeAmigos.includes(AmigoNuevo)){
        alert("El amigo ya existe en la lista");
    }
    else{
        ListaDeAmigos.push(AmigoNuevo);
        MostrarAmigos();
    }
    document.getElementById("amigo").value = "";    //Limpiar el input  

    console.log(ListaDeAmigos);
}

// VISUALIZAR LOS NOMBRES EN UNA LISTA

function MostrarAmigos(){
    let amigos = document.getElementById("listaAmigos");
    amigos.innerHTML = "";      //Limpia la lista antes de ingresar al For

    for(let i=0; i<ListaDeAmigos.length; i++){
        amigos.innerHTML += '<ul>'+ ListaDeAmigos[i] +'</ul>';
    }
}

// SORTEAR Y MOSTRAR EL NOMBRE DEL AMIGO SECRETO
function sortearAmigo(){
    if(ListaDeAmigos.length === 0){
        alert("La lista de amnigos esta vacia");
        return;
    }
    let amigoSecreto = ListaDeAmigos[Math.floor(Math.random() * ListaDeAmigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo Sorteado es: " + amigoSecreto;
}