export default class Cl_CalificacionLetra {
    constructor(nombreE, notaF) {
        this.nombreE = nombreE;
        this.notaF = notaF;
    }

    set nombreE(nE) {
        this._nombreE = nE;
    }
    get nombreE() {
        return this._nombreE;
    }

    set notaF(nF) {
        this._notaF = +nF;
    }
    get notaF() {
        return this._notaF;
    }

    calClasificacionLetra() {
        if (this.notaF >= 90 && this.notaF <= 100) {
            return 'A';
        } else if (this.notaF >= 80 && this.notaF <= 89) {
            return 'B';
        } else if (this.notaF >= 70 && this.notaF <= 79) {
            return 'C';
        } else if (this.notaF >= 60 && this.notaF <= 69) {
            return 'D';
        } else if (this.notaF < 60) {
            return 'F';
        } else {
            return 'Invalid';
        }
    }
}



