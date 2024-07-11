import CL_INumeros from "./CL_INumeros.js";
import CL_Numeros from "./CL_Numeros.js";

let INumeros = new CL_INumeros();

let n1 = INumeros.leerNumero1();
let n2 = INumeros.leerNumero2();
let n3 = INumeros.leerNumero3();

let Numeros = new CL_Numeros(n1, n2, n3);

let mayor = Numeros.encontrarMayor();

let salida = document.getElementById("salida");
salida.innerHTML = INumeros.rptNumeroMayor(Numeros.num1, Numeros.num2, Numeros.num3, mayor);