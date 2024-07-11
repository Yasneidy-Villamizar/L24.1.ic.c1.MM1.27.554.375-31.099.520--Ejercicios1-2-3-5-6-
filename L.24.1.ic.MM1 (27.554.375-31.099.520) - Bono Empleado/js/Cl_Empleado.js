export default class Cl_Empleado {
    constructor (nombre, montoVenta) {
        this.nombre = nombre;
        this.montoVenta = montoVenta;
    }
    set nombre (n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set montoVenta (mV){
        this._montoVenta = mV;
    }
    get montoVenta (){
        return this._montoVenta;
    }
    calcularBono(p){
        return this.montoVenta * (p/100);
    }

}
