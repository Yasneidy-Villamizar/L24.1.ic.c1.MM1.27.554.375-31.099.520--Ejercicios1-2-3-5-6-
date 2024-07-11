export default class CL_INumero {
    leerNumero() {
        return prompt("Escribe un número:");
    }

    rptParidad(num, paridad) {
        return `
        <br> Número: ${num}
        <br> El número es: ${paridad}
        `;
    }
}