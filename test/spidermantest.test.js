/* describe ("Test Suite Dummy Description",() => {
    test ('Case 1 Dummy', () => {
        const resultOfSomething= 1 + 2
        expect (resultOfSomething).toBe(3);
    });
}) */

describe ("Unit Tests for Spiderman class", () => {
    test ('1) Create an spiderman object', () =>{
        const andrewGarfield = new spiderman ("The Amazing Spiderman",31,"Andrew Garfield",2,"Sony")

        //Validando datos
        expect (andrewGarfield.name).toBe ("The Amagazing Spiderman")
        expect (andrewGarfield.age).toBe(31)
        expect (andrewGarfield.actor).toBe("Andrew Garfield")
        expect (andrewGarfield.movies).toBe(31)
        expect (andrewGarfield.studio).toBe("Sony")
    });
})