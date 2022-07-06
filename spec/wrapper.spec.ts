import Wrapper from '../dist/wrapper.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('constructor', function() {

    let map = new Map<number, number>([[1,1],[2,2],[3,3],[4,4]]);
    let wrapper = new Wrapper<Map<number, number>>(map);
    it('equal', () => expect([...wrapper]).toEqual([...map]));
});

describe('set', function() {

    let map = new Map<number, number>();
    let wrapper = new Wrapper<Map<number, number>>(map);
    wrapper.set(1,1);
    it('equal', () => expect([...wrapper]).toEqual([...map]));
});
