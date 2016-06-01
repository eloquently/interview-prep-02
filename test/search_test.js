import { expect } from 'chai';
import * as search from '../src/search.js';

const shortArr = [4,8,15,16,23,42,64,100,112,1000];

const longArr = []

for(let i = 0; i < 100000; i++) {
    longArr.push(i*3);
}

describe('search algorithms', () => {
    const functions = [];
    if(search.linearSearch) 
        functions.push(search.linearSearch);
    if(search.binarySearch) 
        functions.push(search.binarySearch);
        
    for(let fn of functions) {
        describe(`${fn.name}()`, () => {
            let i = 0;
            for(let el of shortArr) {
                ((i) => { 
                    it(`finds ${el} in shortArr`, () => {
                        expect(fn(el, shortArr)).to.eq(i);
                    });
                })(i);
                
                i++;
            }
            for(let i of [50000, 80000, 99999]) {
                it(`finds ${longArr[i]} in longArr`, () => {
                    expect(fn(i*3, longArr)).to.eq(i);
                });
            }
        });
    }
});