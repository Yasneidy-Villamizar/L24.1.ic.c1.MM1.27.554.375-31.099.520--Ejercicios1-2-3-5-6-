export default class CL_INumeros {
    leerNumero1() {
        return prompt("Escribe el primer número:");
    }

    leerNumero2() {
        return prompt("Escribe el segundo número:");
    }

    leerNumero3() {
        return prompt("Escribe el tercer número:");
    }

    rptNumeroMayor(num1, num2, num3, mayor) {
        return `
        <br> Número 1: ${num1}
        <br> Número 2: ${num2}
        <br> Número 3: ${num3}
        <br> Número Mayor: ${mayor}
        `;
    }
}