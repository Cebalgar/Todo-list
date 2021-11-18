const empty = document.querySelector(".empty");
const input = document.querySelector("input");
const listaOrdenada = document.querySelector("ul");



const button = document.querySelector(".btn-add");
button.addEventListener("click",(event)=>{
    event.preventDefault();

    const text = input.value;

  

    if (text !== ""){
       
        const lista= document.createElement("li");
        const parrafo =document.createElement("p");
        parrafo.textContent= text;
       
        
        lista.appendChild(parrafo);
        listaOrdenada.appendChild(lista);
        lista.appendChild(botonDeEliminar());
       
        
        input.value = "";
        empty.style.display="none";
    }    
});

   function botonDeEliminar(){
    const borrarBoton = document.createElement("button");

    borrarBoton.textContent = "X";
    borrarBoton.setAttribute("class","borrar");

    borrarBoton.addEventListener("click",(event)=>{
        const tarea = event.target.parentElement;
        listaOrdenada.removeChild(tarea);

        const tareas = document.querySelectorAll ("li");
        if(tareas.length === 0){

            empty.style.display = "block"
        }

    });
    return borrarBoton;
} 
    
