/*
*Desarrolla un programa que solicite año actual y año de nacimiento de una persona y categorice a la persona en un
grupo de edad de la forma siguiente:
Edad Grupo
    *0-12: Niño
    *13-19: Adolescente
    *20-39: Adulto Joven
    *40-59: Adulto Medio
    *60+: Persona Mayor
*Muestre la edad de la persona y su grupo de edad
*/


import Cl_ClasificarPersona from './Cl_ClasificarPersona.js';
import Cl_IClasificarPersona from './Cl_IClasificarPersona.js';


let iclp = new Cl_IClasificarPersona(); 
    let aA = iclp.leerAnnoA();
    let aN = iclp.leerAnnoN();

let cper = new Cl_ClasificarPersona (aA, aN);
    let eP = cper.edadPersona();
    let c = cper.categoriaP();

const salida = document.getElementById("salida");
salida.innerHTML = iclp.reporteClasificarPersona(eP, c);