var palabras;
if (palabras == [""]){
    palabras = [ "SOPA","PERRO","CAMISA","ARBOL","MENTE","JUNGLA","ARBUSTO","DEPORTE","LIBRO","FELIZ","APRENDER","CAMINO","PIRAMIDE","ABEJA"];
}

localStorage.setItem('myArray', JSON.stringify(palabras));