describe('Comparadores comunes', () => {
    const user = {
        name: "Miguel",
        lastname: "Ortiz" 
    }
    const user2 = {
        name: "Miguel",
        lastname:"Ortiz2"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
});