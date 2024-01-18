
import { suma,resta,multi,divi } from "./calculadora";
function suma(a=0,b=0){
    return a + b;
}
/*FUNCIONES FLECHA*/ 
//cuando empleamos flechas se define con dos parentesis
//interpreta la ultimma linea de codigo como return 
const add = (a=0,b=0)=>{a+b}

var x= add();
var arreglo=[3,4,5,6,7];

function cuadrado(x){
    return x*x;
}

x => x*x;     // el parametro no se pone entre parentesis porque solo es una variable 
(x) => x * x; //asi como aqui 
const cuadr = x => x * x;
const cuadrados = (x) => x * x;


function saludo(nombre, hora){
    if(hora>=12){
        alert("Buenas Tardes " + nombre);
        return "Buenas Tardes " + nombre;
    }else if(hroa >=19){
        alert("Buenas Noches " + nombre);
        return "Buenas noches " + nombre;
    }else{
        alert("Buenos Dias" + nombre);
        return "Buenos Dias " + nombre;
    }
}

const saludar = (nombre = "Yo", hora)=>{
    if(hora>=12){
        alert("Buenas Tardes " + nombre)
        return "Buenas Tardes " + nombre;
    }else if(hroa >=19){
        alert("Buenas Noches " + nombre)
        return "Buenas noches " + nombre;
    }else{
        alert("Buenos Dias" + nombre)
        return "Buenos Dias " + nombre;
    }
}

//se hace uso de lo que se importo 
const operacion = (v1,v2)=> suma(v1,v2);
