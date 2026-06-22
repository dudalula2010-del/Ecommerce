function salvar() {
    let usuario = document.getElementById("nome").value
    if (usuario == "") {
        alert("digite valores validos")
    } else {
        localStorage.setItem("usuario", usuario)
        console.log('nomeSalvo')
        window.location.href = "ecomerce/index.html";
    }
    
}

