const userInf = {
    nombre: "Peter",
    mail: "peter.parker@usm.cl",
    rut: "7459830-3",
    carrera: "Ing. Aeronautica",
    duracionMaxima: 12,
    promedio: [67,57,78,79,59],
    semestre: 5
}

describe("atributos del usuario", () =>{

    test("test de que no tenga carrera indefinida", () => {
        expect(userInf.carrera).not.toBe(undefined);
    })
    test("test de no tener rut indefinido", () => {
        expect(userInf).not.toHaveProperty('piscolasPorNoche');
    })
    test("test de tener mail definido", () => {
        expect(userInf.mail).toBeDefined();
    })
    test("mail con @", () => {
        expect(userInf.mail).toContain("@")
    })
    test("mail con .", () => {
        expect(userInf.mail).toContain(".")
    })
})

describe("duracion de carrera",() => {
    test("cantidad de promedio igual a semestres", () =>{
        expect(userInf.promedio).toHaveLength(userInf.semestre)
    })

    test("cantidad de semestres menor o igual a duracion máxima", () =>{
        expect(userInf.semestre).toBeLessThanOrEqual(userInf.duracionMaxima);
    })
})