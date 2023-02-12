import {SortParameters} from '../../../dist/void/sort.js';
import {ShuffleParameters} from '@alirya/array/shuffle.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('test', function() {

    const map = new Map<number, number>();
    const expects : [number, number][] = [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
    ];

    ShuffleParameters(expects).forEach(value => map.set(...value));

    expect([...map.entries()]).not.toEqual(expects);

    SortParameters(map, ([k1, v1], [k2, v2])=>v1 - v2);

    expect([...map.entries()]).toEqual(expects);

});
