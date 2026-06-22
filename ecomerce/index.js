window.addEventListener("load",function (){
    const nome = localStorage.getItem("usuario")

    if (nome){
        document.getElementById("nome").innerText = nome;

    }else{
        document.getElementById("nome").innerText = "";
    }
});




let contadorA = 0
let contadorB = 0 

const imagens = [
    'imagens/image 3.png',
    'imagens/image 9.png',
    'imagens/image 11.png',
    'imagens/image 13.png',
    'imagens/image 4.png',
    'imagens/image 10.png',
    'imagens/image 14.png',
    'imagens/image 12.png',
    'imagens/image 15.png',
    'imagens/image 17.png',
    'imagens/image 18.png',
    'imagens/image 19.png',
    'imagens/image 20.png'
]

function proximo(contador, lista){
    if(contador < lista.length - 1){
        return contador + 1
    }else{
        return contador = 0
    }
}

function anterior(contador, lista){
    if(contador > 0){
        return contador - 1
    }else{
        return contador = lista.length -1
    }
}

function atualizarImagem1(id, contador){
    document.getElementById(id).src = imagens[contador]
}

function proximoA(){
    contadorA = proximo(contadorA, imagens)
    atualizarImagem1('propaganda1', contadorA)
}

function anteriorA(){
    contadorA = anterior(contadorA, imagens)
    atualizarImagem1('propaganda1', contadorA)
}


const imagens2 = [
    'imagens/image 4.png',
    'imagens/image 10.png',
    'imagens/image 14.png',
    'imagens/image 12.png',
    'imagens/image 15.png',
    'imagens/image 17.png',
    'imagens/image 18.png',
    'imagens/image 19.png',
    'imagens/image 20.png'
]

function proximo(contador, lista){
    if(contador < lista.length - 1){
        return contador + 1
    }else{
        return contador = 0
    }
}

function anterior(contador, lista){
    if(contador > 0){
        return contador - 1
    }else{
        return contador = lista.length -1
    }
}

function atualizarImagem(id, contador){
    document.getElementById(id).src = imagens2[contador]
}

function proximoB(){
    contadorB = proximo(contadorB, imagens2)
    atualizarImagem('propaganda2', contadorB)
}

function anteriorB(){
    contadorB = anterior(contadorB, imagens2)
    atualizarImagem('propaganda2', contadorB)
}












// window.addEventListener("load",function (){
//     const nome = localStorage.getItem("usuario")

//     if (nome){
//         document.getElementById("nome").innerText = nome;

//     }else{
//         document.getElementById("nome").innerText = "";
//     }
// });