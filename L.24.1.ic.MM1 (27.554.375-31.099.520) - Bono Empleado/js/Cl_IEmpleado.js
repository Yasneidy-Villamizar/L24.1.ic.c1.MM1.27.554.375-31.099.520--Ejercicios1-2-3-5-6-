export default class C_IEmpleado {
    leerNombre()
    {
     return prompt ("ingrese nombre del empleado"); 
    }
    leerMontoVenta() 
    {
        return prompt("ingrese monto de ventas");
    }
    leerPorcentaje () {
        return prompt("ingrese porcentaje para calcular el monto");
    }
    reporteEmpleado(n,v,cMB)
    {
     return `
      <br> nombre: ${n}
      <br> montoVenta: ${v}
      <br> montoBono: ${cMB}
      `;
    }
}
    