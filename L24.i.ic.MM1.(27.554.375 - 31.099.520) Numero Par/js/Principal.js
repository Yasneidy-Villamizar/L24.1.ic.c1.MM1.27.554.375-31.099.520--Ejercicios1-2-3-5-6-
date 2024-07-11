import CL_INumero from "./CL_INumero.js";
import CL_Numero from "./CL_Numero.js";

let INumero = new CL_INumero();

let num = INumero.leerNumero();

let Numero = new CL_Numero(num);

let paridad = Numero.verificarParidad();

let salida = document.getElementById("salida");
salida.innerHTML = INumero.rptParidad(Numero.num, paridad);