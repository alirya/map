import Priority from "../../dist/priority";
import Shuffle from "@alirya/array/shuffle-parameters";

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('test', function() {

    const sorted : [string, {priority:number}][] = [
        ['g', {priority:7}],
        ['f', {priority:6}],
        ['e', {priority:5}],
        ['d', {priority:4}],
        ['c', {priority:3}],
        ['b', {priority:2}],
        ['a', {priority:1}]
    ];

    const source = new Priority<string>(Shuffle(sorted));

    it('test', function() {

        expect([...source.values()]).toEqual([{priority:7}, {priority:6}, {priority:5}, {priority:4}, {priority:3}, {priority:2}, {priority:1}]);
        expect([...source.keys()]).toEqual(['g', 'f', 'e', 'd', 'c', 'b', 'a']);
        expect([...source.entries()]).toEqual(sorted);

        let copy = Array.from(sorted);
        source.forEach((value, key) => {

            expect([key, value]).toEqual(copy.shift() as [string, {priority:number}]);
        });

        copy = Array.from(sorted);
        for(const [value, priority] of source) {

            expect([value, priority]).toEqual(copy.shift() as [string, {priority:number}]);
        }
    });

});
