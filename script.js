document.addEventListener ("DOMContentLoaded", () => {
    //Botón que agrega una nueva fila a la tabla 
const boton = document.getElementById("agregarFila");
if (boton)
    boton.addEventListener("click", ()=> {
    const tabla = document.querySelector("table"); 
    if (!tabla) return;
    const nuevaFila = tabla.insertRow(); 
    nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
    });
    }

// Efecto de color al pasar el mouse sobre el título 
    const titulo = document.getElementById("titulo"); 
if (titulo){
        const originalColor = window.getComputedStyle(titulo).color;
        titulo.addEventListener("mouseover", () => { 
            titulo.style.color = "orange";
        });

        titulo.addEventListener("mouseout", () => {
            titulo.style.color = originalColor || "";
        });
    }
);

// funcion oculta un elemento
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
<button onclick="myFunction()">Clickeame</button>

<div id="myDIV" style="border:1px solid black;">
  Este elemento aparece y desaparece con el botón
</div>



