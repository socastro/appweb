const sum = require('../actions/testfunctions');
//import {expect, jest, test} from '@jest/globals';



describe( "testing de suma", () => {
    test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    });

    test('verifica que la suma tenga un largo de 4', () => {
        expect(sum(1298,391).toString()).toHaveLength(4);
    });
})