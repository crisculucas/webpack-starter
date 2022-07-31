//export es la palabra reservada requerida para exportar modulos de codigo o funciones
import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre)=>{
    console.log('Creando etiqueta');
    const h1 = document.createElement('h1');
    h1.innerText = `Test text ${nombre}`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src= webpacklogo;
    document.body.append(img);
}
