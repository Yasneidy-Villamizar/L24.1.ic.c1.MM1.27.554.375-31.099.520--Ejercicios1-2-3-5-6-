/*
*Crear un programa que muestre la calificación en letra de un estudiante en función de su nota final. El programa
*debe solicitar el nombre del estudiante y su nota final. El programa debe calcular la calificación con letra de
*acuerdo con la siguiente escala de calificación:
    *• 90-100: A
    *• 80-89: B
    *• 70-79: C
    *• 60-69: D
    *• Menos de 60: F
*El programa debe mostrar el nombre del estudiante, la nota final y la calificación con letra.
*/


import Cl_CalificacionLetra from './Cl_CalificacionLetra.js';
import Cl_ICalificacionLetra from './Cl_ICalificacionLetra.js';

let icletra = new Cl_ICalificacionLetra();
    let nE = icletra.leerNombreE();
    let nF = icletra.leerNotaF();

let cletra = new Cl_CalificacionLetra(nE, nF);
    let cL = cletra.calClasificacionLetra();

const salida = document.getElementById("salida");
salida.innerHTML = icletra.reporteCalificacionLetra(cletra.nombreE, cletra.notaF, cL);