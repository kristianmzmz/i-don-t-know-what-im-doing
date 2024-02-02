import {v} from "../../src/characterisationTesting";

describe('Función F de la que no tenemos contexto', () => {
    // Paso 2: testear una parte del código, en este caso algo sencillo
    it.skip('No sé lo que va a pasar al enviarle un string vacío', () => {
        const result = v('');

        // Esta assertion PUEDE o NO aportarnos información, lo que nos importa es el resultado
        expect(result).toBe('ni idea del resultado');
    });

    // Paso 4: Reescribir el test anterior para definir el comportamiento real
    it('debería devolver falso cuándo se le pasa un string vacío', () => {
        const result = v('');

        expect(result).toBeFalsy();
    });

    // REPETIMOS como las natrillas (qué viejuno...)

    // Paso 2: testear una parte del código, en este caso algo sencillo
    it.skip('si se le pasa un string de 9 carácteres hará alguna cosa', () => {
        const result = v('asdfghjklb');

        // Esta assertion PUEDE o NO aportarnos información, lo que nos importa es el resultado
        expect(result).toBe('ni idea del resultado');
    });

    // Paso 4: Reescribir el test anterior para definir el comportamiento real
    it('Dado un string de 9 letras nos devolverá falso', () => {
        const result = v('a'.repeat(9));

        expect(result).toBeFalsy();
    });


    // REPETIMOS como las natrillas (qué viejuno...)

    // Paso 2: testear una parte del código, en este caso algo sencillo
    it.skip('si se le pasa un string 9 números hará alguna cosa', () => {
        const result = v('987456789');

        // Esta assertion PUEDE o NO aportarnos información, lo que nos importa es el resultado
        expect(result).toBe('ni idea del resultado');
    });

    // Paso 4: Reescribir el test anterior para definir el comportamiento real
    it('Dado un string de 9 números nos devolverá falso', () => {
        const result = v('987456789');

        expect(result).toBeFalsy();
    });

    // Y AHORA QUé?

    it('dado un string con que empieza por 8 dígitos y seguidamente tiene 1 letra, si el residuio de la suma de los digitos dividido por 23 es 0, la letra de control debería ser T', () => {
        const result = v('00000001T');

        expect(result).toBeFalsy();
    });

});
