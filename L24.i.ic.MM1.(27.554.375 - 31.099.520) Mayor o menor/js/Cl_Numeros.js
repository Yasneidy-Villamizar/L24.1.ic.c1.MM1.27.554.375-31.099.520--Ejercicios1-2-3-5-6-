export default class CL_Numeros {
    constructor(num1, num2, num3) {
        this._num1 = parseInt(num1, 10);
        this._num2 = parseInt(num2, 10);
        this._num3 = parseInt(num3, 10);
    }

    set num1(n1) {
        this._num1 = parseInt(n1, 10);
    }
    get num1() {
        return this._num1;
    }

    set num2(n2) {
        this._num2 = parseInt(n2, 10);
    }
    get num2() {
        return this._num2;
    }

    set num3(n3) {
        this._num3 = parseInt(n3, 10);
    }
    get num3() {
        return this._num3;
    }

    encontrarMayor() {
        let mayor = this._num1;
        if (this._num2 > mayor) {
            mayor = this._num2;
        }
        if (this._num3 > mayor) {
            mayor = this._num3;
        }
        return mayor;
    }
}