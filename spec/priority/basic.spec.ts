import Priority from "../../dist/priority";
import Shuffle from "@alirya/array/shuffle-parameters";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const sorted : [string, number][] = [
        ['g', 7],
        ['f', 6],
        ['e', 5],
        ['d', 4],
        ['c', 3],
        ['b', 2],
        ['a', 1]
    ];

    const source = new Priority<string>(Shuffle(sorted));

    it('test', function() {

        expect([...source.values()]).toEqual([7, 6, 5, 4, 3, 2, 1]);
        expect([...source.keys()]).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.entries()]).toEqual(sorted);

        let copy = Array.from(sorted);
        source.forEach((value, key) => {

            expect([key, value]).toEqual(copy.shift() as [string, number]);
        });

        copy = Array.from(sorted);
        for(const [value, priority] of source) {

            expect([value, priority]).toEqual(copy.shift() as [string, number]);
        }
    });

});
