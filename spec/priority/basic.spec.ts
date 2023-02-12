import Priority from '../../dist/priority.js';
import {PriorityValue} from '../../dist/priority.js';
import {ShuffleParameters} from '@alirya/array/shuffle.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const sorted : PriorityValue<string>[] = [
        {value:'g', priority:7},
        {value:'f', priority:6},
        {value:'e', priority:5},
        {value:'d', priority:4},
        {value:'c', priority:3},
        {value:'b', priority:2},
        {value:'a', priority:1}
    ];

    const source = new Priority<string>(
        new Map(ShuffleParameters(sorted).map(value=>[value.value, value]))
    );

    it('test', function() {

        expect([...source.values()]).toEqual(sorted);
        expect([...source.keys()]).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.entries()]).toEqual(sorted.map(value=>[value.value, value]));

        let copy = Array.from(sorted);
        source.forEach((value, key) => {

            const actual : PriorityValue<string> = copy.shift() as PriorityValue<string>;
            expect([key, value]).toEqual([actual.value, actual]);
        });

        copy = Array.from(sorted);
        for(const [value, priority] of source) {

            const actual : PriorityValue<string> = copy.shift() as PriorityValue<string>;
            expect([value, priority]).toEqual([actual.value, actual]);
        }
    });

});
