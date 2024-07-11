export default class Cl_ICalificacionLetra {
    leerAnnoA() {
        return prompt("Ingresa el año actual:");
    }
    leerAnnoN() {
        return prompt("Ingresa el año de nacimiento:");
    }
    reporteClasificarPersona(eP, c) {
        return `
        <br> Edad de la Persona: ${eP}
        <br> Categoria: ${c}
        `;
    }
}