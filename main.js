//----------------------------------------------defino un array vacío con mis imágenes y las cargo.
let imagenes = [];

imagenes[0] = 'paisaje-1.jpg';
imagenes[1] = 'paisaje-2.jpg';
imagenes[2] = 'paisaje-3.jpg';
imagenes[3] = 'paisaje-4.jpg';
imagenes[4] = 'paisaje-5.jpg';
imagenes[5] = 'paisaje-6.jpg';
imagenes[6] = 'paisaje-7.jpg';
imagenes[7] = 'paisaje-8.jpg';
imagenes[8] = 'paisaje-9.jpg';
imagenes[9] = 'paisaje-10.jpg';


/*--------------------------------------------Se crea una función p/cambiar automáticamente el índice de las img*/

let indiceImagenes = 0; /*p/q' empiece del índice 0 del array*/
let tiempo = 2000;

function cambiarImagenes(){
    document.slider.src = imagenes[indiceImagenes];

    if (indiceImagenes < imagenes.length-1){
        indiceImagenes++;
    }else{
        indiceImagenes = 0;
    }
}

/*----------------------------------------------------------------------p/q' llame a la función c/cierto tiempo*/

setInterval(cambiarImagenes, tiempo);
