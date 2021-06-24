import {sumar, multiplicar, restar, dividir} from "../maths";

describe('Calculos matematicos', () => {
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2);
    });
    test('Multiplicar', ()=> {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Resta', ()=> {
        expect(restar(5,2)).toBe(3);
    });
    test('Division', ()=> {
        expect(dividir(9,3)).toBe(3);
    });
});
