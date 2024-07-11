export default class Cl_ICalificacionLetra {
    leerNombreE() {
        return prompt("Escribe tu nombre aquí:");
    }
    leerNotaF() {
        return prompt("Ingresa tu nota final aquí:");
    }
    reporteCalificacionLetra(nE, nF, cL) {
        return `
        <br> Nombre del Estudiante: ${nE}
        <br> Nota Final: ${nF}
        <br> Calificación con Letra: ${cL}
        `;
    }
}