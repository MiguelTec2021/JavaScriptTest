import { isNull, isTrue, isFalse, isUndefined } from "../true";

describe('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Probar resultados verdaderos', () => {
    test('Vedadero', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados falsos', () => {
    test('Falsos', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados Undefined', () => {
    test('Undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe('Probar resultados no verdaderos', () => {
    test('Falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});
