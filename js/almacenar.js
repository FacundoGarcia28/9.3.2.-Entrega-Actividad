document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("contenedor");
    const inputItem = document.getElementById("item");
    const btnAgregar = document.getElementById("agregar");
    const btnLimpiar = document.getElementById("limpiar");

    const elementosGuardados = obtenerElementosAlmacenados("elementos", [])

    btnAgregar.addEventListener("click", function () {
        const nuevoElemento = inputItem.value;
        if (nuevoElemento !== "") {
            elementosGuardados.push(nuevoElemento);
            localStorage.setItem("elementos", JSON.stringify(elementosGuardados));
            inputItem.value = "";
            actualizarVista();
        }
    });

    btnLimpiar.addEventListener("click", function () {
        localStorage.removeItem("elementos");
        elementosGuardados.length = 0;
        actualizarVista();
    });

    function actualizarVista() {
        contenedor.innerHTML = "";
        for (const elemento of elementosGuardados) {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = elemento;
            contenedor.appendChild(li);
        }
    }

    actualizarVista();
});

function obtenerElementosAlmacenados(clave) {
    const elementos = JSON.parse(localStorage.getItem(clave));
    if (elementos !== null) {
        return elementos;
    } else {
        return [];
    }
}