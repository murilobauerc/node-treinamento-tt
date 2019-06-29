const assert = require('assert')
const { somar, subtrair } = require('../calculadora')

describe('calculadora', () => {
    describe('somar', () => {
        it('deve retornar a soma dos dois numeros passados', () => {
            // arrange
            const a = 5
            const b = 2

            // act
            const resultado = somar(a,b)
            

            // assert
            assert.strictEqual(resultado, (a + b))
        })
    }),
    describe('subtrair', () => {
        it('deve retornar a subtração dos dois numeros passados', () => {
            // arrange
            const a = 2
            const b = 3

            // act
            const resultado = subtrair(a,b)

            // assert
            assert.strictEqual(resultado, (a - b))
        })
    })
})