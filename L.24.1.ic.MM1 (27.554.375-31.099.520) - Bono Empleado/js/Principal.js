//Crear un programa que calcule el bono para un empleado en función del monto de sus ventas. El programa debe
//solicitar al usuario que ingrese el nombre del empleado, el monto de las ventas y el porcentaje a aplicarse. El
//programa debe calcular el monto del bono y mostrarlo junto con el nombre del empleado y el monto de las ventas


/*import Cl_Empleado from "./Cl_Empleado.js"; 
import Cl_IEmpleado from "./Cl_IEmpleado.js"; 

let iEmple= new Cl_IEmpleado();
    let n = iEmple.leerNombre();
    let mV = iEmple.leerMontoVenta();
    let p = iEmple.leerPorcentaje ();

let emple = new Cl_Empleado(n, mV);
    let v = emple.montoVenta();
    let cMB = emple.calcularBono(p);
const salida = document.getElementById("salida");
salida.innerHTML - iEmple.reporteEmpleado(n, v, cMB); */

import Cl_Empleado from './Cl_Empleado.js'; 
import Cl_IEmpleado from './Cl_IEmpleado.js'; 

let iEmple = new Cl_IEmpleado();
let n = iEmple.leerNombre();
let mV = iEmple.leerMontoVenta();
let p = iEmple.leerPorcentaje();

let emple = new Cl_Empleado(n, mV);
let v = emple.montoVenta;
let cMB = emple.calcularBono(p);

const salida = document.getElementById("salida");
salida.innerHTML = iEmple.reporteEmpleado(n, v, cMB);