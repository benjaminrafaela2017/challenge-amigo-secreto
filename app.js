// Array para almacenar los nombres de amigos
let amigos =[];

//funcion para agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();


    //validar que el campo no este vacio
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre")
        return; //Detiene la ejecucion de la funcion
    }

    //Validar que el nombre no este duplicado 
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre  ${nombreAmigo} ya esta en la lista`);
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = "";

    //Actualizar la lista en el HTML
    actualizarLista();

}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    //Limpiar el contenido actual de la Lista
    listaAmigos.innerHTML = ""; //  Borra cualquier contenido previo dentro del contenedor de la lista

    //Recorrer el array con un ciclo for
    for(let i =0; i <amigos.length; i++){
        const li = document.createElement("li");
        li.textContent =amigos[i];
        listaAmigos.appendChild(li);
    }

}


//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if(amigos.length===0){ //Compruebe si el array "amigos"esta vacio.
        return;

    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);//Genera un numero aleatorio entre 0 y la longitud del array menor.

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener el nombre del array.

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}