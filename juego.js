let palabraAzar;
let cantErrores = 0;
let cantAciertos = 0;


const btn = id('reiniciar-partida');
const imagen = id('img-ahorcado');
const btnLetras = document.querySelectorAll( "#letras button" );

btn.addEventListener('click', iniciar);

function iniciar(event){
    id('resultado').innerHTML = "";
    imagen.src = 'imagenes/Ahorcado0.png';
    btn.disabled = true;
    cantErrores = 0;
    cantAciertos = 0;

    const parrafo = id('palabra-a-adivinar');
    parrafo.innerHTML = '';

    const cantPalabras = palabras.length;
    const valorAzar = obtenerRandom(0, cantPalabras);

    palabraAzar = palabras[valorAzar];
    
    const cantLetras = palabraAzar.length;

    for (let i = 0; i < btnLetras.length; i++){
        btnLetras[i].disabled = false;
    }

    for (let i = 0; i < cantLetras; i++){
        const span = document.createElement('span');
        parrafo.appendChild( span );
    }

}


for(let i = 0; i < btnLetras.length; i++){
    btnLetras[i].addEventListener( 'click', clickLetras );
}

function clickLetras(event){
    console.log('hola');
    const spans = document.querySelectorAll('#palabra-a-adivinar span');
    const button = event.target;
    button.disabled = true;

    const letra = button.innerHTML.toUpperCase();
    const palabra = palabraAzar.toUpperCase();

    let acerto = false;
    for(let i = 0; i < palabra.length; i++){
        if(letra == palabra[i]){


            spans[i].innerHTML = letra;
            cantAciertos++;
            acerto = true;
        }
    }

    if(acerto == false){
        cantErrores++;
        const source = `imagenes/Ahorcado${cantErrores}.png`;
        imagen.src = source;
    }

    if(cantErrores == 6){
        id('resultado').innerHTML = "Perdiste, la palabra era " + palabraAzar;
        gameOver();
    }else if(cantAciertos == palabraAzar.length){
        id('resultado').innerHTML = "¡¡¡GANASTE!!!";
        gameOver();
    }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
}



function gameOver( ){
    for(let i = 0; i < btnLetras.length; i++){
        btnLetras[i].disabled = true;
    }

    btn.disabled = false;
}


gameOver();