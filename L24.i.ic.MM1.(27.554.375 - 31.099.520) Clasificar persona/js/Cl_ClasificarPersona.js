export default class Cl_CalificacionLetra {
    constructor(annoA, annoN) {
        this.annoA = annoA;
        this.annoN = annoN;
    }

    set annoA(aA) {
        this._annoA = +aA;
    }
    get annoA() {
        return this._annoA;
    }

    set annoN(aN) {
        this._annoN = +aN;
    }
    get annoN() {
        return this._annoN;
    }

    edadPersona(){
        return this.annoA - this.annoN;
    }
    categoriaP() {
        const edad = this.edadPersona();
        if (edad >= 0 && edad <= 12) {
            return 'Niño';
        } else if (edad >= 13 && edad <= 19) {
            return 'Adolescente';
        } else if (edad >= 20 && edad <= 39) {
            return 'Adulto Joven';
        } else if (edad >= 40 && edad <= 59) {
            return 'Adulto Medio';
        } else if (edad >= 60) {
            return 'AdultoMayor';
        } else {
            return 'Dato Erroneo';
        }
    }
}



