export default class CL_Numero {
    constructor(num) {
        this._num = parseInt(num, 10);
    }

    set num(n) {
        this._num = parseInt(n, 10);
    }
    get num() {
        return this._num;
    }

    verificarParidad() {
        if (this._num % 2 === 0) {
            return "par";
        } else {
            return "impar";
        }
    }
}